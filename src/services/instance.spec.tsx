import { getApiUrl } from "./instance";

test("only returns production url", () => {
const obj = {
    getItem: () => { return "http://localhost:8000"}
}
const apiUrl = getApiUrl(obj);
expect(apiUrl).toEqual("https://api.example.com")
})