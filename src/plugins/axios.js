import axios from 'axios'
export const publicPath = process.env.NODE_ENV === "production" 
? "/chd102/g1/" 
: "/"