const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/*
const storyText = 'It was 94 fahrenheit at Tsuda, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
*/

const storyText = '気温 華氏40度で外は寒かった。 :insertX: は出かけた。 :insertY: に着いた。 :insertZ: 体重110ポンドの :insertX: は驚いたが、 Bob は驚かなかった。 :insertY: ではよくあることだった。';
const insertX = ['君','知らない人','私'];
const insertY = ['学校','知らない街','夢の中'];
const insertZ = ['混乱していた。','混雑していた。','寝ていた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("日本").checked) {
    const weight = `${Math.round(110/2.205)}kg`;
    const temperature = `摂氏${Math.round((40-32) * 5 / 9)}度`;
    newStory = newStory.replace('華氏40度', temperature);
    newStory = newStory.replace('110ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
