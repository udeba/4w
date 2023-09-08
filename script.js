const birthMonth = Number(prompt("insert Birth Month"));
if (birthMonth > 12 || birthMonth < 1) {
  alert("You entered wrong information");
  // throw error();
}
const birthDay = Number(prompt("insert Birth Day"));
if (birthDay > 31 || birthDay < 1) {
  alert("You entered wrong information");
  console.log("You entered wrong information");
}
const capricorn = "Capricorn";
const aquarius = "Aquarius";
const pisces = "Pisces";
const aries = "Aries";
const taurus = "Taurus";
const gemini = "Gemini";
const cancer = "Cancer";
const leo = "Leo";
const virgo = "Virgo";
const libra = "Libra";
const scorpio = "Scorpio";
const sagittarius = "Sagittarius";

if (birthMonth == 1 && birthDay >= 1 && birthDay <= 19) {
  console.log("Your Horoscope:", capricorn);
} else if (birthMonth == 1 && birthDay >= 20 && birthDay <= 31) {
  console.log("Your Horoscope:", aquarius);
}
if (birthMonth == 2 && birthDay >= 1 && birthDay <= 18) {
  console.log("Your Horoscope:", aquarius);
} else if (birthMonth == 2 && birthDay >= 19 && birthDay <= 29) {
  console.log("Your Horoscope:", pisces);
}
if (birthMonth == 3 && birthDay >= 1 && birthDay <= 20) {
  console.log("Your Horoscope:", pisces);
} else if (birthMonth == 3 && birthDay >= 21 && birthDay <= 31) {
  console.log("Your Horoscope:", aries);
}
if (birthMonth == 4 && birthDay >= 1 && birthDay <= 19) {
  console.log("Your Horoscope:", aries);
} else if (birthMonth == 4 && birthDay >= 20 && birthDay <= 30) {
  console.log("Your Horoscope:", taurus);
}
if (birthMonth == 5 && birthDay >= 1 && birthDay <= 20) {
  console.log("Your Horoscope:", taurus);
} else if (birthMonth == 5 && birthDay >= 21 && birthDay <= 31) {
  console.log("Your Horoscope:", gemini);
}
if (birthMonth == 6 && birthDay >= 1 && birthDay <= 20) {
  console.log("Your Horoscope:", gemini);
} else if (birthMonth == 6 && birthDay >= 21 && birthDay <= 30) {
  console.log("Your Horoscope:", cancer);
}
if (birthMonth == 7 && birthDay >= 1 && birthDay <= 22) {
  console.log("Your Horoscope:", cancer);
} else if (birthMonth == 7 && birthDay >= 23 && birthDay <= 31) {
  console.log("Your Horoscope:", leo);
}
if (birthMonth == 8 && birthDay >= 1 && birthDay <= 22) {
  console.log("Your Horoscope:", leo);
} else if (birthMonth == 8 && birthDay >= 23 && birthDay <= 31) {
  console.log("Your Horoscope:", virgo);
}
if (birthMonth == 9 && birthDay >= 1 && birthDay <= 22) {
  console.log("Your Horoscope:", virgo);
} else if (birthMonth == 9 && birthDay >= 23 && birthDay <= 30) {
  console.log("Your Horoscope:", libra);
}
if (birthMonth == 10 && birthDay >= 1 && birthDay <= 22) {
  console.log("Your Horoscope:", libra);
} else if (birthMonth == 10 && birthDay >= 23 && birthDay <= 31) {
  console.log("Your Horoscope:", scorpio);
}
if (birthMonth == 11 && birthDay >= 1 && birthDay <= 21) {
  console.log("Your Horoscope:", scorpio);
} else if (birthMonth == 11 && birthDay >= 22 && birthDay <= 30) {
  console.log("Your Horoscope:", sagittarius);
}
if (birthMonth == 12 && birthDay >= 1 && birthDay <= 21) {
  console.log("Your Horoscope:", sagittarius);
} else if (birthMonth == 12 && birthDay >= 22 && birthDay <= 31) {
  console.log("Your Horoscope:", capricorn);
} else {
  console.log("Please enter a valid value.");
  alert("Please enter a valid value.");
}
