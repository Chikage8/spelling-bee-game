// Object containing english words of different length
const english_dictionary = {
    2:  [
            'At', 'Be', 'Do', 'Go', 'Hi', 'If', 'In', 'Is', 'It', 'Me',
            'My', 'No', 'Of', 'Oh', 'On', 'Or', 'Ow', 'To', 'Up', 'We',
            'Am', 'An', 'As', 'By', 'So', 'Us', 'Ox', 'Ex', 'Qi'
        ],
    3:  [
            'Age', 'Air', 'Arm', 'Art', 'Bat', 'Big', 'Box', 'Bus', 'Cat', 'Cow',
            'Cry', 'Day', 'Dog', 'Ear', 'Eat', 'Egg', 'End', 'Eye', 'Fan', 'Far',
            'Fix', 'Fly', 'Fox', 'Fun', 'Gas', 'Get', 'Gun', 'Hat', 'Hot', 'Ice',
            'Ink', 'Jar', 'Job', 'Joy', 'Key', 'Kid', 'Leg', 'Lid', 'Log', 'Man',
            'Map', 'Mat', 'Mix', 'Net', 'Now', 'Pen', 'Pie', 'Pot', 'Run', 'Sky'
        ],
    4:  [
            'Airy', 'Bark', 'Blue', 'Book', 'Bud', 'Calm', 'Cute', 'Dark', 'Dawn', 'Deep',
            'Dusk', 'Fall', 'Fast', 'Fine', 'Fire', 'Flow', 'Free', 'Glow', 'Gold', 'Good',
            'Gray', 'Grip', 'Hope', 'Iron', 'Jade', 'Just', 'Lush', 'Moon', 'Neat', 'Open',
            'Peak', 'Pink', 'Play', 'Rain', 'Read', 'Rose', 'Ruby', 'Salt', 'Save', 'Snow',
            'Soft', 'Star', 'Tall', 'True', 'Warm', 'Wave', 'Wind', 'Wise', 'Word', 'Work'
        ],
    5:  [
            'Angel', 'Beach', 'Berry', 'Black', 'Blade', 'Blush', 'Broom', 'Brush', 'Candy', 'Witch', 
            'Charm', 'Chill', 'Cloud', 'Crane', 'Creek', 'Crown', 'Dream', 'Dress', 'Dusty', 'Earth',
            'Fairy', 'Faith', 'Frost', 'Gleam', 'Windy', 'Grace', 'Happy', 'Heart', 'Jewel', 'Magic',
            'Misty', 'Ocean', 'Peace', 'Petal', 'Quiet', 'Rainy', 'Ridge', 'Shine', 'Smile', 'Spark',
            'Storm', 'Sweet', 'Tower', 'Trick', 'Trust', 'Whirl', 'Whisk'
        ],
    6:  [
            'Planet', 'Doctor', 'Market', 'Yellow', 'Rocket', 'Banana', 'Mother', 'Method', 'Bright', 'Window', 
            'Spirit', 'Forest', 'Purple', 'Winter', 'Guitar', 'Bridge', 'Castle', 'Summer', 'Silver', 'Saddle', 
            'Laptop', 'Wisdom', 'Orphan', 'Cheese', 'Tennis', 'Puzzle', 'Bottle', 'Carrot', 'Sponge', 'Church', 
            'Shadow', 'Cactus', 'Desert', 'Meadow', 'Temple', 'Candle', 'Tunnel', 'Dinner', 'School', 'Monkey', 
            'Pirate', 'Rabbit', 'Cannon', 'Lizard', 'Ticket', 'Napkin', 'Falcon', 'Tomato', 'Jacket', 'Pencil', 
            'Helmet', 'Ribbon', 'Carpet', 'Plague', 'Hammok',  
        ],
    7:  [   
            'Captain', 'Mystery', 'Freedom', 'Silence', 'Library', 'Weather', 'Antenna', 'Justice', 'Perform', 'Journey',
            'Failure', 'Account', 'Stylish', 'Typhoon', 'Country', 'Bicycle', 'Curtain', 'Concert', 'Natural', 'Silence',
            'Penguin', 'Organic', 'Shelter', 'Cunning', 'Diamond', 'Husband', 'Academy', 'Contest', 'Powerful', 'Connect',
            'Preview', 'Thunder', 'Suspend', 'Quality', 'Machine', 'Proceed', 'Forward', 'Explore', 'Comfort', 'Against',
            'Reflect', 'Balance', 'Picture', 'Problem', 'Perfect', 'Prepare', 'Village', 'Require', 'Passion', 'Display'
        ],
}

const turkish_dictionary = {
    2:  [
            'Ağ', 'Ak', 'Al', 'Av', 'At', 'Ay', 'Az', 'Ek', 'En', 'Er',
            'El', 'Et', 'Ev', 'Ey'
        ],
    3:  [
            'Sağ', 'Sol', 'Cem', 'Bal', 'Dil', 'Fır', 'Göl', 'Han', 'Jön', 'Kaş',
            'Göz', 'Day', 'Lal', 'Nar', 'Örü', 'Şap', 'Tat', 'Var', 'Fan', 'Yıl',
            'Zor', 'Fön', 'Hız', 'Kul', 'Mor', 'Pür', 'Boy'
        ],
    4:  [
            'Ağıt', 'Bakı', 'Cıva', 'Evli', 'Fani', 'Gemi', 'Jale', 'Kara', 'Nane', 'Ölçü',
            'Paha', 'Şişe', 'Vazo', 'Yama', 'Füze', 'Hafi', 'Kaba', 'Masa', 'Önem', 'Pire',
            'Fare', 'Grip', 'Rota', 'Taze', 'Üçer', 'Vana', 'Yaya', 'Araç', 'Akıl', 'Zeka',
            'Doğu', 'Batı', 'Hane', 'İnek', 'Etli'
        ],
    5:  [
            'Dönem', 'Zorlu', 'Yakın', 'Görev', 'Karşı', 'Duygu', 'Dürüm', 'Anlam', 'Korku', 'Yayın', 
            'Dolap', 'Kıvam', 'Geliş', 'Gidiş', 'Yıkım', 'Sanrı', 'Görüş', 'Süreç', 'Zorlu', 'Güçlü',
            'Cevap', 'Görme', 'Hesap', 'Keşke', 'Kibar', 'Bayat', 'Araba', 'Erkek', 'Kadın', 'Kuzey', 
            'Güney'
        ],
    6:  [
            'Görücü', 'Yırtık', 'Gömlek', 'Düşman', 'Zengin', 'Yaprak', 'Kıymet', 'Yıkıcı', 'Keskin', 'Gerçek', 
            'Merkez', 'Kısmet', 'Kavram', 'Kırıcı', 'Sürgün', 'Esaslı', 'Meşgul', 'Fırsat', 'Güçsüz', 'Bakıcı',
            'Hatıra', 'Nankör', 'Rafine', 'Şöhret', 'Tevfik', 'Vitrin', 'Yaşama', 'Hırsız', 'Sağlam', 'Pahalı',
            'Önemli', 'Pireli'
        ],
    7:  [   
            'Dolapçı', 'Çalışma', 'Gelişim', 'Değerli', 'Havasız', 'Yaşamak', 'İmtiyaz', 'Kavrama', 'Gömülme', 'Kelepçe', 
            'Merkezi', 'Kırmızı', 'Santral', 'Fırlama', 'Sürekli', 'Kıyamet', 'Anlamak', 'Zorlama', 'Devamlı', 'Köpüklü',
            'Uzaklık', 'Gürültü', 'Fırtına', 'Şüpheci', 'İhtimal', 'İrtibat', 'Görüşme', 'Kesikli', 'Serbest', 'İhtiyaç',
            'Önemsiz', 'Hanedan'

        ],
}

module.exports = {
    english_dictionary,
    turkish_dictionary,
};