import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: "dfhtfxlvx",
    },
    url: {
        secure: false, // force https, set to false to force http
    },
});

export function buildImage(src) {
    return cld.image(src).quality("auto").format("auto");
}

export function buildVideo(src) {
    return cld.video(src).quality("q_auto");
}
