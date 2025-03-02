import { Server } from 'http';
import app from './app'

const PORT = 5000;

let server: Server;

async function bootstrap() {
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`)
    })
}

bootstrap();
