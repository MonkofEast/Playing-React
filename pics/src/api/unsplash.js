import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { Authorization: 'Client-ID j0N3ZZ5RRHpGzbPFB3VMGCvfhWcmU4tm1OqO9cxYLhc' }
});

