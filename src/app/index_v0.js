const Task = require('data.task')
const Spotify = require('./spotify')

const argv = new Task((rej, res) => res(process.argv))
const names = argv.map(args => args.slice(2))

const Intersection = xs => ({
  xs,
  concat: ({ xs: ys }) =>
    Intersection(xs.filter(x => ys.some(y => x === y)))
})

const related = name =>
  Spotify.findArtist(name)
    .map(artist => artist.id)
    .chain(Spotify.relatedArtists)
    .map(artists => artists.map(artist => artist.name))

const artistIntersection = rels1 => rels2 =>
  Intersection(rels1).concat(Intersection(rels2)).xs

const main = ([name1, name2]) =>
  Task.of(artistIntersection)
    .ap(related(name1))
    .ap(related(name2))

names.chain(main)
  .fork(console.error.bind(console), console.log.bind(console))
