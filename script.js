/* var fso = new ActiveXObject("Scripting.FileSystemObject")
var filename = "balls.html"

var file = fso.GetFile(filename)

var streamWrite = file.OpenAstextStream(2)

streamWrite.WriteLine()
 */
// Create Random String
create_token_string(30)

function create_token_string(token_length){
    var random_string = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ0123456789abcdefghijklmnopqrstuwxyz'
    for(var i, i = 0; i < token_length; i++) {
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    // document.write(random_string)
    document.querySelector('html').innerText = random_string
}