console.log('======================================UNIONS');
let id: string | number = "user-123";
id = 42;
console.log(id);

console.log('======================================TYPEDEFS');
type Questions = 'If'|'When'|'Why'|'What'
let neil: Questions = 'If'
console.log(neil);
