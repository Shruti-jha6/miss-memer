const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");
  const memeAuthor = document.querySelector(".meme-generator .meme-author");
  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
  const generateMeme = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        const memes = data.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        updateDetails(randomMeme.url, randomMeme.name, "Imgflip");
      })
      .catch((error) => {
        memeTitle.innerHTML = "Failed to load meme. Try again!";
        memeAuthor.innerHTML = "";
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  
  
  
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();

