function countCards(cards) {
  var cardCount=0;

  for (var i=0; i< cards.length; i++) {
    if (cards[i].number === 'J' || cards[i].number === 'K' ||      cards[i].number  === 'Q'){
      cardCount += 10;
    }
    else if (cards[i].number !== 'A'){
      cardCount+= cards[i].number;
    }
  }

  for (var j=0; j <cards.length; j++){
    if(cards[j].number==='A' && cardCount <=10){
      cardCount+=11;
    }
    else if(cards[j].number ==='A' && cardCount >10){
      cardCount+=1;
    }
  }

  return cardCount;
}
