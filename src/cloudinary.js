import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: "dfhtfxlvx",
    },
    url: {
        secure: true, // force https, set to false to force http
    },
});

export function buildImage(src) {
    return cld.image(src).quality("auto").format("auto");
}
