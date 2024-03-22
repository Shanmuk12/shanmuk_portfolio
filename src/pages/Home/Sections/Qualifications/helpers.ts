export const downloadCV = () => {
  const xhr: XMLHttpRequest = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.open("GET", "/assets/docs/Leonardo Jacomussi - Resume.zip");
  xhr.send();
  xhr.onload = (event: ProgressEvent<EventTarget>): void => {
    if (event.currentTarget["status"] === 200) {
      const blob = xhr.response;
      const link: HTMLAnchorElement = document.createElement("a");
      link.target = "_blank";
      const newURL = window.URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.href = newURL;
      link.download = `Leonardo Jacomussi - Resume.zip`;
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(newURL);
    };
  };
};