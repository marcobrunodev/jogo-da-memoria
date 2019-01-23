const createMemoryCard = (nameClass, src, alt) => `
  <article class="memory-card ${nameClass}">
    <img 
      src="${src}"
      alt="${alt}" 
      class="icon"
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("ae");
