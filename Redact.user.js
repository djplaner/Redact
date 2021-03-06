// ==UserScript==
// @name        Redact
// @namespace   http://damos.world
// @description Redact parts of a web page for privacy such as live demos
// @include     http://usqstudydesk.usq.edu.au/m2/*
// @include     https://usqstudydesk.usq.edu.au/m2/*
// @grant       GM_addStyle
// @run-at      document-start
// @version     1.0.0
// ==/UserScript==
// Quick and dirty update to work better with USQ systems

try
{
//  console.log("Hiding body") ;
  GM_addStyle("body {visibility: hidden;}") ;
//  console.log("Body hidden") ;

  var func = function()
  {
    var redact_text = 
    [
      '.useridnumber, .useremail, .idnumber, .email, .subfield_firstname, .subfield_idnumber, .subfield_email',
      'a[href*="/user/view.php"]',
      'a[href*="/assignsubmission_file/"]',
      'td[id^="mod-quiz-report-overview-report"].cell.c3',
      'td[id^="mod-quiz-report-overview-report"].cell.c4',
      'div.choicegroups-membersnames',
      'table[id=completion-progress] tbody tr th a',
      'select[name=userid] option',
      'optgroup[label^="Student"] option, optgroup[label^="No roles"] option',
      'table#completion-progress tbody tr td:nth-child(2), table#completion-progress tbody tr td:nth-child(3)',
      'table#participants tbody tr td:nth-child(4), table#participants tbody tr td:nth-child(5)',
      'span.ui-id-1',
      'table.studentInfo tbody tr:nth-child(3) td',
      'table.studentAccess tbody tr td:nth-child(1), table.studentAccess tbody tr td:nth-child(2), table.studentAccess tbody tr td:nth-child(3)',
      
      // more student details
      'span#ui-id-4.ui-dialog-title', // title for dialog
      'div#moreStudentDetails table tr td'  // cells in table with personal information
    ] ;

    var redact_image =
    [
      '.picture',
      '.userpicture',
      'img[src*="studentphoto.cqu.edu.au"]' /*handbook photo*/
    ] ;

//    console.log("Redacting text") ;
    GM_addStyle(redact_text.join()+' {color: transparent !important; text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 6px !important;}') ;
 //   console.log("Text Redacted") ;

  //  console.log("Redacting Images") ;
    GM_addStyle(redact_image.join()+' {filter: blur(10px) !important;}') ;
   // console.log("Images Redacted") ;

//    console.log("Setting page visible") ;
    window.document.getElementsByTagName("body")[0].style.visibility = "visible" ;
  }

  addEventListener('DOMContentLoaded', func, false);
}
catch(err)
{
  console.log('Error: '+err) ;
  console.log('On line: '+err.lineNumber) ;
  console.log('Stack:'+err.stack) ;
}
