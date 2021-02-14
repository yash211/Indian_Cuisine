const state = [{
  link : "indistates/maharashtra.html",
  img: "maha.jpg",
  title: "MAHARASHTRA",
  description: "Traditionally, Maharashtrians have considered their food to be more austere than others.Maharashtrian cuisine includes mild and spicy dishes.",
}, {
  link : "indistates/guj.html",
  img: "guj.jfif",
  title: "GUJRAT",
  description: "desc2",
}, {
  link : "indistates/raj.html",
  img: "raj.jfif",
  title: "RAJASTHAN",
  description: "desc3",
}];

const MAHARASHTRA =[
  {
    rlink : "https://www.youtube.com/watch?v=rSLiOqJ2egU",
    simg : "recimg/pavbhaji.jfif",
    name : "Pav Bhaji",
    summ : "Amchi Maharashtra food is incomplete without this dish which has come to be synonymous to the state! Fresh and thick slices of bread, smothered in butter served with a delicious mix of moderately spiced vegetables. This lip-smacking dish has won the heart of every Indian!"
  },{
    rlink : "https://www.youtube.com/watch?v=lrAzNrre5oo",
    simg : "recimg/vada-pav.jfif",
    name : "Vada Pav",
    summ : "Vada Pav can easily be called the Indian version of a burger! A delicious, spicy, deep-fried patty made of potato is squeezed between a thick slice of bread, similar to a burger bun. Between the vada (patty) and pav (bread) a spicy mix of spices and salt is sprinkled and garnished with a fried, salted green chilli. Sounds perfect, isn't it? It's an all-day snack and is extremely popular among Maharashtrians."
  },{
    simg : "recimg/modak.jfif",
    rlink : "https://www.youtube.com/watch?v=KcXhD7vAYmo",
    name : "Modak",
    summ : "Modak are steamed dumplings with an outer rice flour dough and a coconut-jaggery stuffing. These sweet dumplings are also known as Ukadiche Modak in Marathi language.The word ukadiche means ‘that which is steamed’ or ‘steamed’. The word ‘ukad’ also means steamed rice flour dough. So in simple English “Ukadiche Modak” means steamed modak."
  },{
    simg : "recimg/puran-poli.jfif",
    rlink :  "https://www.youtube.com/watch?v=EduK3JXMSmw",
    name : "Puran Poli",
    summ : "Puran Poli is a flatbread stuffed with a sweet lentil stuffing. In Marathi language the sweet stuffing is called as Puran and the bread is called as Poli.The stuffing is made from chana dal which are husked and split black chickpeas also known as bengal gram. The sweet element in the stuffing is jaggery which is unrefined sugar that is made from sugar cane juice."
  },{
    simg : "recimg/misal.jfif",
    rlink : "https://www.youtube.com/watch?v=kaJzwCD8uvY",
    name : "Misal Pav",
    summ : "Misal pav is a popular Mumbai street food of usal (sprouts curry) topped with onions, tomatoes, farsan (fried savory mixture), lemon juice and served with pav.The uniqueness of this dish is with its topping and the spicy misal is topped with chivda mix, or sev or farsan. This spicy and lip-smacking dish is typically served for breakfast or as a snack which can be easily extended for lunch and dinner too."
  }
]

const GUJARAT =[
  { 
    simg :"recimg/khandvi.jfif",
    rlink : "https://www.youtube.com/watch?v=dtvRMihki6g",
    name : "Khandvi",
    summ : "One of the much-loved Gujarati snacks, khandvi is also known as Patuli or Dahivadi and made with gram flour. Khandvi is also a popular snack in Maharashtrian cuisine. This rolled, bright snack is tempered with coconut, mustard seeds and curry leaves aand is a delight to serve with tea."
  },{
    simg :"recimg/undhiyu.jfif",
    rlink : "https://www.youtube.com/watch?v=mNg9riW_WMU",
    name : "Undhiyu",
    summ : "This Gujarati vegetable curry is wholesome and very healthy. Made with a mélange of winter veggies like brinjals, surti papdi, potatoes, coconut, bananas and methi, this dish is traditionally served in earthen pots."
  },{
    simg :"recimg/aam.jfif",
    rlink : "https://www.youtube.com/watch?v=0DJB6-MBzEk",
    name : "Aam Shrikhand with Mango Salad",
    summ : "Shrikhand is a simple and soothing Gujarati dessert made with hung curd. Mango with Shrikhand is a heavenly combination one can have in summers! Shrikhand being a creamy and luscious Indian dessert is paired with the king of fruits."
  },{
    simg :"recimg/dhokla.jfif",
    rlink : "https://www.youtube.com/watch?v=97-Y-XeYN88",
    name : " Dhokla",
    summ : "The ultimate Gujarati food, these Soft and spongy dhoklas just cannot be missed. Dhokla is one of the most loved Gujarati snack across the country and is made in multiple ways. This dhokla recipe is a quick and easy one that is delicious as well as healthy! A recipe that is steamed and made in just 30 minutes, using besan with a colorful, chili tempering. "
  },{
    simg :"recimg/dal-dhokli.jfif",
    rlink : "https://www.youtube.com/watch?v=g3TJmQA5XBg",
    name : " Dal Dhokli",
    summ : "A Gujarati and Rajasthani dish, Dal Dhokli is a comfort food also known as varan phal or chakolya. While it is a popular in the Marwar region of Rajasthan, it is a staple in all of Gujarat. Spiced whole wheat dumplings simmered in a lively curry made with tuvar dal, garlic, peanuts, kokum and turmeric."
  }
]

const RAJASTHAN =[
  {
    simg : "recimg/dal-bati.jfif",
    rlink : "https://www.youtube.com/watch?v=syqtuQevkvc",
    name : "Dal baati churma",
    summ : "This is the state’s classic signature dish. Baati is hard, unleavened bread cooked in the desert areas of Rajasthan. Baati is prized mainly for its long shelf life, plus it requires hardly any water for its preparation. It is always eaten with dal (lentil curry). The dal is made of lentils while churma is a coarsely ground wheat mixture crushed and cooked in ghee and jaggery or sugar."
  },{
    simg : "recimg/gatte.jfif",
    rlink : "https://www.youtube.com/watch?v=IrFee8crNc4",
    name : "Gatte ki subzi",
    summ : "Most of Rajasthani cusine came to fruition as a result of the arid conditions. For this dish you don’t need any fresh vegetables and that’s its speciality. This curry is made with gram flour dumplings (steamed and lightly fried) and tangy gravy made up of tomato, buttermilk and spices. It’s best enjoyed with rotis (Indian flat bread) and rice."
  },{
    simg : "recimg/raab.jfif",
    rlink : "https://www.youtube.com/watch?v=vlXrt_NiuFo",
    name : "Raab",
    summ : "This is a thick broth made from millet (bajra) flour and buttermilk, which is heated and fermented. Bajra flour and buttermilk are put in an earthen pot and mixed to make a thick sauce. This is then left to simmer over a low flame for several hours until fully cooked. It is then eaten, usually as a soup. A variant is ‘makki ki raab’, or corn raab, in which boiled corn kernels are added."
  },{
    simg : "recimg/kachori.jfif",
    rlink : "https://www.youtube.com/watch?v=x51SuDEnRco",
    name : "Onion kachori",
    summ : "Pyaaz ki kachori originated in Jodhpur and is now eaten all over the state, mainly as a breakfast snack. They are flaky, deep-fried breads made from plain flour and stuffed with a spicy onion mixture with spices like fennel, cumin, turmeric and chilli powder. Usually, kachoris are served with coriander & mint and date & tamarind chutney."
  },{
    simg : "recimg/ghevar.jfif",
    rlink : "https://www.youtube.com/watch?v=8bw1uVGAatw",
    name : "Ghevar",
    summ : "A special sweet dessert from Jaipur that is essentially a disc made from flour, soaked in ghee, milk and topped with sliced almonds. This sweet dish has a crunchy texture and is made in a mould. There are varieties of Ghevar that can be prepared from a plain, mawa (condensed milk) and malai ghevar (cream)."
  }
]