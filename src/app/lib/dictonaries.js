// Define available languages
const supported_languages = ["TR", "EN"];

// Object containing english words of different length
const english_dictionary = {
    2:  [
            'AT', 'BE', 'DO', 'GO', 'HI', 'IF', 'IN', 'IS', 'IT', 'ME',
            'MY', 'NO', 'OF', 'OH', 'ON', 'OR', 'OW', 'TO', 'UP', 'WE',
            'AM', 'AN', 'AS', 'BY', 'SO', 'US', 'OX', 'EX', 'QI'
        ],
    3:  [
            'AGE', 'AIR', 'ARM', 'ART', 'BAT', 'BIG', 'BOX', 'BUS', 'CAT', 'COW',
            'CRY', 'DAY', 'DOG', 'EAR', 'EAT', 'EGG', 'END', 'EYE', 'FAN', 'FAR',
            'FIX', 'FLY', 'FOX', 'FUN', 'GAS', 'GET', 'GUN', 'HAT', 'HOT', 'ICE',
            'INK', 'JAR', 'JOB', 'JOY', 'KEY', 'KID', 'LEG', 'LID', 'LOG', 'MAN',
            'MAP', 'MAT', 'MIX', 'NET', 'NOW', 'PEN', 'PIE', 'POT', 'RUN', 'SKY'
        ],
    4:  [
            'AIRY', 'BARK', 'BLUE', 'BOOK', 'BUD', 'CALM', 'CUTE', 'DARK', 'DAWN', 'DEEP',
            'DUSK', 'FALL', 'FAST', 'FINE', 'FIRE', 'FLOW', 'FREE', 'GLOW', 'GOLD', 'GOOD',
            'GRAY', 'GRIP', 'HOPE', 'IRON', 'JADE', 'JUST', 'LUSH', 'MOON', 'NEAT', 'OPEN',
            'PEAK', 'PINK', 'PLAY', 'RAIN', 'READ', 'ROSE', 'RUBY', 'SALT', 'SAVE', 'SNOW',
            'SOFT', 'STAR', 'TALL', 'TRUE', 'WARM', 'WAVE', 'WIND', 'WISE', 'WORD', 'WORK'
        ],
    5:  [
            'ANGEL', 'BEACH', 'BERRY', 'BLACK', 'BLADE', 'BLUSH', 'BROOM', 'BRUSH', 'CANDY', 'WITCH', 
            'CHARM', 'CHILL', 'CLOUD', 'CRANE', 'CREEK', 'CROWN', 'DREAM', 'DRESS', 'DUSTY', 'EARTH',
            'FAIRY', 'FAITH', 'FROST', 'GLEAM', 'WINDY', 'GRACE', 'HAPPY', 'HEART', 'JEWEL', 'MAGIC',
            'MISTY', 'OCEAN', 'PEACE', 'PETAL', 'QUIET', 'RAINY', 'RIDGE', 'SHINE', 'SMILE', 'SPARK',
            'STORM', 'SWEET', 'TOWER', 'TRICK', 'TRUST', 'WHIRL', 'WHISK'
        ],
    6:  [
            'PLANET', 'DOCTOR', 'MARKET', 'YELLOW', 'ROCKET', 'BANANA', 'MOTHER', 'METHOD', 'BRIGHT', 'WINDOW', 
            'SPIRIT', 'FOREST', 'PURPLE', 'WINTER', 'GUITAR', 'BRIDGE', 'CASTLE', 'SUMMER', 'SILVER', 'SADDLE', 
            'LAPTOP', 'WISDOM', 'ORPHAN', 'CHEESE', 'TENNIS', 'PUZZLE', 'BOTTLE', 'CARROT', 'SPONGE', 'CHURCH', 
            'SHADOW', 'CACTUS', 'DESERT', 'MEADOW', 'TEMPLE', 'CANDLE', 'TUNNEL', 'DINNER', 'SCHOOL', 'MONKEY', 
            'PIRATE', 'RABBIT', 'CANNON', 'LIZARD', 'TICKET', 'NAPKIN', 'FALCON', 'TOMATO', 'JACKET', 'PENCIL', 
            'HELMET', 'RIBBON', 'CARPET', 'PLAGUE', 'HAMMOK',  
        ],
    7:  [   
            'CAPTAIN', 'MYSTERY', 'FREEDOM', 'SILENCE', 'LIBRARY', 'WEATHER', 'ANTENNA', 'JUSTICE', 'PERFORM', 'JOURNEY',
            'FAILURE', 'ACCOUNT', 'STYLISH', 'TYPHOON', 'COUNTRY', 'BICYCLE', 'CURTAIN', 'CONCERT', 'NATURAL', 'SILENCE',
            'PENGUIN', 'ORGANIC', 'SHELTER', 'CUNNING', 'DIAMOND', 'HUSBAND', 'ACADEMY', 'CONTEST', 'POWERFUL', 'CONNECT',
            'PREVIEW', 'THUNDER', 'SUSPEND', 'QUALITY', 'MACHINE', 'PROCEED', 'FORWARD', 'EXPLORE', 'COMFORT', 'AGAINST',
            'REFLECT', 'BALANCE', 'PICTURE', 'PROBLEM', 'PERFECT', 'PREPARE', 'VILLAGE', 'REQUIRE', 'PASSION', 'DISPLAY'
        ],
}

const turkish_dictionary = {
    2:  [
            'AĞ', 'AK', 'AL', 'AV', 'AT', 'AY', 'AZ', 'EK', 'EN', 'ER',
            'EL', 'ET', 'EV', 'EY'
        ],
    3:  [
            'SAĞ', 'SOL', 'CEM', 'BAL', 'DİL', 'FIR', 'GÖL', 'HAN', 'JÖN', 'KAŞ',
            'GÖZ', 'DAY', 'LAL', 'NAR', 'ÖRÜ', 'ŞAP', 'TAT', 'VAR', 'FAN', 'YIL',
            'ZOR', 'FÖN', 'HIZ', 'KUL', 'MOR', 'PÜR', 'BOY', 'YAŞ', 'YAY', 'AŞK'
        ],
    4:  [
            'AĞIT', 'BAKI', 'CIVA', 'EVLİ', 'FANİ', 'GEMİ', 'JALE', 'KARA', 'NANE', 'ÖLÇÜ',
            'PAHA', 'ŞİŞE', 'VAZO', 'YAMA', 'FÜZE', 'HAFİ', 'KABA', 'MASA', 'ÖNEM', 'PİRE',
            'FARE', 'GRİP', 'ROTA', 'TAZE', 'ÜÇER', 'VANA', 'YAYA', 'ARAÇ', 'AKIL', 'ZEKA',
            'DOĞU', 'BATI', 'HANE', 'İNEK', 'ETLİ'
        ],
    5:  [
            'DÖNEM', 'ZORLU', 'YAKIN', 'GÖREV', 'KARŞI', 'DUYGU', 'DÜRÜM', 'ANLAM', 'KORKU', 'YAYIN', 
            'DOLAP', 'KIVAM', 'GELİŞ', 'GIDİŞ', 'YIKIM', 'SANRI', 'GÖRÜŞ', 'SÜREÇ', 'ZORLU', 'GÜÇLÜ',
            'CEVAP', 'GÖRME', 'HESAP', 'KEŞKE', 'KİBAR', 'BAYAT', 'ARABA', 'ERKEK', 'KADIN', 'KUZEY', 
            'GÜNEY', 'YAŞAM', 'KAYAK'
        ],
    6:  [
            'GÖRÜCÜ', 'YIRTIK', 'GÖMLEK', 'DÜŞMAN', 'ZENGIN', 'YAPRAK', 'KIYMET', 'YIKICI', 'KESKIN', 'GERÇEK', 
            'MERKEZ', 'KISMET', 'KAVRAM', 'KIRICI', 'SÜRGÜN', 'ESASLI', 'MEŞGUL', 'FIRSAT', 'GÜÇSÜZ', 'BAKICI',
            'HATIRA', 'NANKÖR', 'RAFİNE', 'ŞÖHRET', 'TEVFİK', 'VİTRİN', 'YAŞAMA', 'HIRSIZ', 'SAĞLAM', 'PAHALI',
            'ÖNEMLİ', 'PİRELİ'
        ],
    7:  [   
            'DOLAPÇI', 'ÇALIŞMA', 'GELİŞİM', 'DEĞERLİ', 'HAVASIZ', 'YAŞAMAK', 'İMTİYAZ', 'KAVRAMA', 'GÖMÜLME', 'KELEPÇE', 
            'MERKEZİ', 'KIRMIZI', 'SANTRAL', 'FIRLAMA', 'SÜREKLİ', 'KIYAMET', 'ANLAMAK', 'ZORLAMA', 'DEVAMLI', 'KÖPÜKLÜ',
            'UZAKLIK', 'GÜRÜLTÜ', 'FIRTINA', 'ŞÜPHECİ', 'İHTİMAL', 'İRTİBAT', 'GÖRÜŞME', 'KESİKLİ', 'SERBEST', 'İHTİYAÇ',
            'ÖNEMSİZ', 'HANEDAN'
        ],
}

const english_letters_sorted_by_frequency = [
                                                'S', 'E', 'A', 'O', 'R', 'I', 'L', 'T', 'N', 'D',
                                                'U', 'C', 'P', 'Y', 'M', 'H', 'G', 'B', 'K', 'F',
                                                'W', 'V', 'Z', 'X', 'J', 'Q'
                                            ]

const turkish_letters_sorted_by_frequency = [
                                                'A', 'E', 'K', 'İ', 'L', 'M', 'R', 'N', 'T', 'I',
                                                'S', 'U', 'Y', 'D', 'O', 'B', 'Ü', 'Ş', 'Z', 'G',
                                                'Ç', 'P', 'H', 'C', 'V', 'Ğ', 'Ö', 'F', 'J'
                                            ]

module.exports = {
    supported_languages,
    english_dictionary,
    turkish_dictionary,
    english_letters_sorted_by_frequency,
    turkish_letters_sorted_by_frequency,
};