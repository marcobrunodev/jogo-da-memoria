const createMemoryCard = () => `
  <article class="memory-card">
    <img 
      src='img/icon-collabcode.png' 
      alt='Gueio mascote da CollabCode' 
      class='icon'
      onClick="handleClick()"
    />
  </article>
`;

const createMemoryCardFront = () => `
  <article class="memory-card -front">
    <img 
      src='img/icon-c.png' 
      alt='Ícone de um livro de C++' 
      class='icon'
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("ae");
