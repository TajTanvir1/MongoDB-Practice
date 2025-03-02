"use strict";
// to get total from several data
db.Oders2.aggregate([
    {
        $facet: {
            totalSale: [
                {
                    $project: {
                        orderTotal: {
                            $sum: {
                                $map: {
                                    input: "$products",
                                    as: "product",
                                    in: { $multiply: ["$$product.quantity", "$$product.price_per_unit"] }
                                }
                            }
                        }
                    }
                },
                {
                    $group: { _id: "null", totalSale: { $sum: "$orderTotal" } }
                },
                {
                    $project: { _id: 0, totalSale: 1 }
                }
            ]
        }
    }
]);
