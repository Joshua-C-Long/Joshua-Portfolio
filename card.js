const cardUrl = "https://joshua-c-long.github.io/Joshua-Portfolio/card.html";

const vCard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Long;Joshua;;;",
  "FN:Joshua Long",
  "TITLE:Junior Data Analyst",
  "TEL;TYPE=CELL:+19043471778",
  "EMAIL;TYPE=INTERNET:longj0317@hotmail.com",
  "URL:" + cardUrl,
  "URL;TYPE=Portfolio:https://joshua-c-long.github.io/Joshua-Portfolio/",
  "ADR;TYPE=HOME:;;;Jacksonville;FL;;;",
  "NOTE:SQL | Excel | Power BI | Data Visualization",
  "END:VCARD"
].join("\r\n");

const saveContact = document.querySelector("#save-contact");
saveContact.href = URL.createObjectURL(new Blob([vCard], { type: "text/vcard;charset=utf-8" }));
saveContact.download = "Joshua-Long.vcf";

const shareButton = document.querySelector("#share-card");
const shareStatus = document.querySelector("#share-status");

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "Joshua Long | Junior Data Analyst",
    text: "Connect with Joshua Long and view his data analytics work.",
    url: cardUrl
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(cardUrl);
    shareStatus.textContent = "Link copied";
    window.setTimeout(() => { shareStatus.textContent = "Send this page"; }, 2200);
  } catch (error) {
    if (error.name !== "AbortError") {
      window.location.href = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(cardUrl)}`;
    }
  }
});
