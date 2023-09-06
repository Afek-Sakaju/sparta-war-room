function addLineBreaksToText(text, lineBreaksCount = 1) {
  const lineBreaks = '\n'.repeat(lineBreaksCount);
  const punctuations = /[.!?]/g;
  const textWithLineBreaks = text?.replaceAll(punctuations, `$& ${lineBreaks}`);
  let result = textWithLineBreaks;

  const isEndsWithLineBreaks = textWithLineBreaks?.endsWith('\n');
  if (isEndsWithLineBreaks) {
    const subStrEndIndex = textWithLineBreaks.length - lineBreaksCount - 1;
    result = textWithLineBreaks.substring(0, subStrEndIndex);
  }

  return result;
}

async function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}
