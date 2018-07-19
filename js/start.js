var User = function ( name = "user",
                      email = "user@sample.com",
                      photo = "http://moziru.com/images/profile-clipart-default-user-1.jpg" ) {
        this.name = name
        this.email = email
        this.photoURL = photo
        this.info = ''
}
User.__proto__.admin = {
        photoURL: "https://www.shareicon.net/download/2016/04/14/492851_admin.ico",
        name: "Admin"
}
User.prototype.messageBox = ( function () {
        var box = document.createElement ( 'div' )
        document.body.appendChild ( box )
        box.style = `
                position: fixed;
                bottom: 0;
                right: 0;
                width: 300px;
                height: 200px;
                overflow: auto;
                border: 1px solid gray;
                padding: 10px;
                background-color: #000;
        `

        box.picture = box.appendChild ( document.createElement ( 'img' ) )
        box.picture.style.width = "50px"
        box.name = box.appendChild ( document.createElement ( 'span' ) )
        box.name.style = "font-weight: bold; color: #9ab; padding-left:10px;"
        box.message = box.appendChild ( document.createElement ( 'textarea' ) )
        box.message.placeholder = "Привет!"
        box.message.oninput = function ( event ) {
                event.target.parentNode.querySelector ( 'img' ).src = User.admin.photoURL
                event.target.parentNode.querySelector ( 'span' ).innerHTML = User.admin.name
        }
        box.message.style = "width: 100%; height: 100%;"

        return box
})()
User.prototype.write = function ( text ) {
        this.messageBox.picture.src = this.photoURL
        this.messageBox.name.innerHTML = this.name
        this.messageBox.message.value = text
       
}
User.prototype.read = function () {
        this.messageBox.picture.src = this.photoURL
        this.messageBox.name.innerHTML = this.name
        this.info = this.messageBox.message.value
        console.log ( `${this.name} прочитал сообщение:\n${this.info}` )
        this.messageBox.message.value = "OK"
}
	
var user1 = new User ( "Van" )
var user2 = new User ( 'Anyk', "anyk@gmail.com", 'http://icons.iconarchive.com/icons/artua/dragon-soft/512/User-icon.png' )
var user3 = new User ( 'Dima', "dima@gmail.com", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOgijvqAadwbjqvu-0FUu9wDZS17yr1HT3_rjjEOzcB7yYYQQ')