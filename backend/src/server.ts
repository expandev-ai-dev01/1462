import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { config } from '@/config';
import { errorMiddleware } from '@/middleware/errorMiddleware';
import { notFoundMiddleware } from '@/middleware/notFoundMiddleware';
import apiRoutes from '@/routes';

const app: Application = express();

/**
 * @summary Security middleware configuration
 */
app.use(helmet());
app.use(cors(config.api.cors));

/**
 * @summary Request processing middleware
 */
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

/**
 * @summary Logging middleware
 */
app.use(morgan('combined'));

/**
 * @summary Health check endpoint (no versioning)
 */
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Alexandre Pet Care API',
  });
});

/**
 * @summary API Routes with versioning
 * Creates routes like:
 * - /api/v1/external/...
 * - /api/v1/internal/...
 */
app.use('/api', apiRoutes);

/**
 * @summary 404 handler
 */
app.use(notFoundMiddleware);

/**
 * @summary Error handling middleware
 */
app.use(errorMiddleware);

/**
 * @summary Graceful shutdown handler
 */
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

/**
 * @summary Server startup
 */
const server = app.listen(config.api.port, () => {
  console.log(
    `Alexandre Pet Care API running on port ${config.api.port} in ${process.env.NODE_ENV} mode`
  );
  console.log(`Health check available at: http://localhost:${config.api.port}/health`);
  console.log(`API base URL: http://localhost:${config.api.port}/api/${config.api.version}`);
});

export default server;
