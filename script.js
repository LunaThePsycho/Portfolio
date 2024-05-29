var curPageIndex = 0;
var curLang = "Hungarian";
var inacLang = "English";

function changePage(parameter)
{
    var pages, options, videos;
    pages = document.getElementsByClassName("page");
    for(var i = 0; i < pages.length ; i++)
    {
        pages[i].style.display = "none";
    }

    option = document.getElementsByClassName("menu_choice");
    for(var i = 0; i < pages.length ; i++)
    {
        option[i].className = option[i].className.replace(" active","");
    }
    videos = document.getElementsByClassName("background_video");

    if(typeof parameter == 'number')
    {
        if(curPageIndex != 0)
            videos[curPageIndex-1].pause();
        curPageIndex = parameter;
        if(curPageIndex != 0)
            {
                videos[curPageIndex-1].currentTime = 0;
                videos[curPageIndex-1].play();
            }
            
    }
        
    if(typeof parameter == 'string')
    {
        if(parameter == 'next')
        {
            curPageIndex += 1;
        }
        if(parameter == 'prev')
        {
            curPageIndex -= 1;
        }
        if(curPageIndex == pages.length)
        {
            curPageIndex = 0;
        }
        if(curPageIndex == -1)
        {
            curPageIndex = pages.length - 1 ;
        }
    }
    pages[curPageIndex].style.display = "block";
    option[curPageIndex].className += " active";
}


function openChar(event,topic){
    var contents;
    contents = document.getElementsByClassName("char_content");
    for(var i = 0; i < contents.length ; i++)
    {
        contents[i].style.display = "none";
    }

    document.getElementById(topic).style.display = "block";
}


function changeLang()
{
    var tohide,toshow;
    tohide = document.getElementsByClassName(curLang);
    toshow = document.getElementsByClassName(inacLang);
    for(var i = 0; i < tohide.length ; i++)
    {
        tohide[i].style.display = "none";
        toshow[i].style.display = "block";
    }
    var tmp = curLang;
    curLang = inacLang;
    inacLang = tmp; 
}


document.getElementById("main_page_button").click();
document.getElementById("Syzygy").style.display = "block";



