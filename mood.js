const bing_api_endpoint = "https://api.bing.microsoft.com/v7.0/images/search";
const bing_api_key = BING_API_KEY

function runSearch() {
  let query = document.querySelector(".search .form input").value
  let queryurl = bing_api_endpoint + "?q=" + encodeURIComponent(query);

  let request = new XMLHttpRequest();
  request.setRequestHeader("Ocp-Apim-Subscription-Key", bing_api_key);

  // TODO: Construct the request object and add appropriate event listeners to
  // handle responses. At a minimum, you'll need to set request headers to
  // accept JSON responses, and to set the header "Ocp-Apim-Subscription-Key" to
  // the value in BING_API_KEY. See the API docs at
  // https://docs.microsoft.com/en-us/bing/search-apis/bing-image-search/reference/headers

  handleBingResponse();

  return false;  // Keep this; it keeps the browser from sending the event
                  // further up the DOM chain. Here, we don't want to trigger
                  // the default form submission behavior.
}

function handleBingResponse() {
  window.location.hash = "results";
}

function closeSeachPane() {
  window.location.hash = "";
}

document.querySelector("#exitButton").addEventListener("click", closeSeachPane);
