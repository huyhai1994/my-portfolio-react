export const getImageUrl = (path) => {
    /*TODO: dynamically import image to our components*/
    /*TODO: In summary, this function helps in dynamically generating the full URL for an image located in the assets directory based on the provided path.*/
    return new URL(`assets/${path}`, import.meta.url).href;
}