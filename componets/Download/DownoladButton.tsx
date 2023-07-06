export const downloadButton = (url: string): void => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName!);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
};