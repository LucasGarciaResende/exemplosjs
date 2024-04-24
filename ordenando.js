const swap = (vetor, pos1, pos2) => {
  const numTemp = vetor[pos1];
  vetor[pos1] = vetor[pos2];
  vetor[pos2] = numTemp;
  return vetor;
}
const shuffle = (vetor, trocas) => {
  const vetorShuffle = vetor.slice();
  for (let i = 0; i < trocas; i++){
      let posAtual = vetorShuffle.length;
      while (posAtual !== 0){
          let posRandom = Math.floor(Math.random() *  posAtual);
          posAtual--;
          [vetorShuffle[posAtual], vetorShuffle[posRandom]] = [vetorShuffle[posRandom], vetorShuffle[posAtual]];
      }
  }
  return vetorShuffle; 
}

const bubble_sort = (vetor) => {
    let trocas;
    do {
      trocas = false;
      for (let i = 0; i < vetor.length - 1; i++) {
        if (vetor[i] > vetor[i + 1]) {
          trocas = true;
          swap(vetor, i, i + 1);
        }
      }
    } while (trocas);
    return vetor;
  }

const selection_sort = (vetor) => {
  let menor;
  for (let i = 0; i < vetor.length; i++){
    menor = i;
    for (let j = i + 1; j < vetor.length; j++){
      if (vetor[j] < vetor[menor]){
        menor = j;
      }
    }
    swap(vetor, menor, i);
  }
  return vetor;
}

const particionamento = (vetor, inicial, final, pivot) => {
  let i = inicial - 1;
  for (let j = inicial; j < final; j++){
    if (vetor[j] < pivot){
      i++;
      swap(vetor, i, j);
    }
  }
  swap(vetor, i + 1, final);
  return i + 1;
}

const quick_sort = (vetor, inicial = 0, final = vetor.length - 1) => {
  if (inicial < final){
    const pivot = vetor[final];
    const posPart = particionamento(vetor, inicial, final, pivot);
    quick_sort(vetor, inicial, posPart - 1);
    quick_sort(vetor, posPart + 1, final);
  }
  return vetor;
}
