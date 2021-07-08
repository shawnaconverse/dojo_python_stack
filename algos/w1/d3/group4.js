/* 
  Parens Valid
	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing


function parensValid(str) {
  var total = 0

  for(var i = 0; i < str.length; i++){
    if(str[i] == "("){
      total++
      for(var x = i + 1; x < str.length; x++){
        if(str[x] == ")"){
          total++
          break;
        }
        else{
          return false;
        }
      }
    }
  }

  if(total % 2 == 0){
    return true;
  }

  else{
    return false;
  }
}

/*****************************************************************************/

/* 
  Braces Valid
  Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

function bracesValid(str) {
  var openArray = []
  var closeArray = []

  for(var i = 0; i < str.length; i++){
    if(str[i] == "("){
      openArray.push(str[i])
      for(var x = i + 1; x < str.length; x++){
        if(str[x] == ")"){
          closeArray.push(str[x])
          break;
        }
        else{
          return false;
        }
      }
    }

    else if(str[i] == "{"){
      openArray.push(str[i])
      for(var x = i + 1; x < str.length; x++){
        if(str[x] == "}"){
          closeArray.push(str[x])
          break;
        }
        else{
          return false;
        }
      }
    }

    else if(str[i] == "["){
      openArray.push(str[i])
      for(var x = i + 1; x < str.length; x++){
        if(str[x] == "]"){
          closeArray.push(str[x])
          break;
        }
        else{
          return false;
        }
      }
    }

  }

  if(openArray.length == closeArray.length){
    return true;
  }

  else{
    return false;
  }
}
