// Asynchronous loader for external scripts

const loadScript = (src: string): Promise<Event> =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

export default loadScript;
