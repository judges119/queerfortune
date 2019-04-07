const Twit = require('twit')

let fortunes = [
  'With integrity and consistency -- your queerness grows and flourishes.',
  'Reach out your hand today to support others who helped you become you.',
  'For those inside the closet; it is not the outside facade but the inside you that is true.',
  'Your power is in your ability to decide who you are.',
  'You are the determiner of your own gender.',
  'You are the determiner of your own sexuality.',
  'How queer is queer? However much you are.',
  'Your identity is valid.',
  'Queer all you can.',
  'Understanding the nature of change, changes the nature.',
  'Queer is who you are.',
  'Share your joys and sorrows with your queer family.',
  'Queerness will be yours for a long time.',
  'You are an exciting, inspiring, and queer person.',
  'Travel inside yourself, be comfortable inside yourself',
  'If you are scared to look inside yourself, do not rush, take your time.',
  'If you feel comfortable, go confidently in the direction of your identity.',
  'Your queerness is in your favour.',
  'You will be successful in being the queerest you that you can be.',
  'You are the emperor of your own queerness',
  'Cookies go stale. Queerness is forever.',
  'LSQBS - Let Something Queer Be Said.',
  'Make everyday your queerest. You will improve yourself greatly.',
  'Never be less than your own ideal vision of yourself.',
  'You are queer in many ways.',
  'Stand tall! Do not look down upon yourself.',
  'Courage is not the absence of fear; it is the conquest of it.',
  'A family is who you choose, not to whom you are related.',
  'Your queerness may shut doors you would not really wish to go through, but it will open others.',
  'We should not let our fears hold us back from pursuing our queerness.',
  'Your heart is pure, your mind clear, and soul queer.',
  'Do not let your worries overshadow your queerness.',
  'Everything must have a beginning.',
  'You will have many important queer moments.',
  'You may make many changes before settling satisfactorily.',
  'Allow your mind to absorb new understanding.',
  'A new outlook brightens your image and brings new queer viewpoints.',
  'You begin to appreciate how important it is to share your personal beliefs.',
  'You are always entertaining and delightful.',
  'You have a unique queerness.'
]

let fortunes_new = fortunes.slice();

let fortunes_used = []
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_KEY,
  access_token_secret: process.env.ACCESS_SECRET,
})

tweetFortune()

setInterval(tweetFortune, 1000 * 60 * 60 * 8);

function tweetFortune() {
  if (fortunes_new.length === 0) {
    fortunes_new = fortunes_used;
    fortunes_used = [];
  }
  let fortune = fortunes_new.splice(Math.floor(Math.random() * fortunes_new.length), 1)
  fortunes_used = fortunes_used.concat(fortune[0])
  fortune = fortune + ' Lucky number: ' + Math.floor(Math.random() * 100)
  T.post('statuses/update', { status: fortune }, function(err, data, response) {
    console.log(data)
  })
}
