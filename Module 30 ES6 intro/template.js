const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul'];
const ages = [18, 27, 25, 26, 21];
const friends = [4, 6, 13, 16, 12];
for (let i = 0; i < names.length;i++) {
    const mailText = `
Hi ${names[i]},
tomar boyos ${ages[i]}. tumi taratari jibon niye chinta koro. Tomar naki ${friends[i]}ta friends. Ekhon friend komiye life niye vabo`
    console.log(mailText);
}