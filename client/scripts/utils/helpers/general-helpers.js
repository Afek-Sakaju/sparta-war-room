function addLineBreaksToText(text, lineBreaksCount = 1) {
  const lineBreaks = '\n'.repeat(lineBreaksCount);
  const punctuations = /[.!?]/g;

  return text?.replace(punctuations, `$& ${lineBreaks}`)?.trimEnd();
}

async function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const encodeImageToBase64 = (image) => `data:image/jpeg;base64,${image}`;
