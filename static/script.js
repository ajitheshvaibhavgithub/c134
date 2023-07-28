var date =new Date()
let display_date = "date :"+ date.toLocaleDateString()
$(document).ready(function(){

    console.log('Ready')
    $("#date").html(display_date)
    //  Fetch the current date and update it in the DOM




    //  write an event, when Submit button is clicked
    $('#button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('#text').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {"text":text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',
            url:"/request",

            //  Data to be sent in JSON format
            data : JSON.stringify(input_text),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                 sentiment=result.data.predicted_emotion
                 emoji=result.data.predicted_emotion_img_url

                //  update the DOM elements
                $("#sentiment").text(sentiment)
                $("#emoji").attr("src",emoji)
                $("#sentiment").show()
                $("#emoji").show()

                //  show them

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})