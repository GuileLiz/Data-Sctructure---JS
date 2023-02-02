function reverse(word){
	if(word.length <= 1) return word;
	return reverse(word.slice(1))+word[0];
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'