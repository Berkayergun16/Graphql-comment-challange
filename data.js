const users = [
	{
		id: "1",
		username: "john",
		city: "Melbourne"
	},
	{
		id: "2",
		username: "mseven",
		city: "Istanbul"
	},
	{
		id: "3",
		username: "maria",
		city: "Zagreb"
	}
];
const posts = [
	{
		id: "1",
		title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		userId: "1"
	}, {
		id: "2",
		title: "Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji.",
		userId: "3"
	}, {
		id: "3",
		title: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.",
		userId: "2"
	}, {
		id: "3",
		title: "Yeni post.",
		userId: "2"
	}
];


const comments = [
    {
        id:"1",
        text:"Bu ahmetin yorumudur .",
        postId:"1",
        userId:"2"
    },
    {
        id:"2",
        text:"Bu Berkayın Yorumudur.",
        postId:"1",
        userId:"1"
    }
    ,
    {
        id:"3",
        text:"foo bar.",
        postId:"2",
        userId:"2"
    }
    ,
    {
        id:"4",
        text:"foo bar baz.",
        postId:"3",
        userId:"1"
    }
]


module.exports = {
    users,
    posts,
    comments
}