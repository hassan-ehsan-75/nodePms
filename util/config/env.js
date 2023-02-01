// Imports
const dotenv =require('dotenv');

// Load .env
dotenv.config();
// Environment
exports.NODE_ENV = process.env.NODE_ENV||'development';

// Port
exports.PORT = process.env.PORT || 8000;
exports.MONGOOSE_CONNECTION = process.env.MONGOOSE_CONNECTION || '';
