<div id='about' class='container'>
    <div class='row'>
        <hr class='text-light'/>
        <div class='col-12'>
            <h2 class='text-white text-center'>About</h2>
            <p class='text-light pt-3 text-center pb-2'>
                Built with a passion for data and innovation, this web scraper 
                app empowers users to effortlessly extract and analyze valuable 
                information from the web. Designed with efficiency and precision 
                in mind, it simplifies data retrieval for a seamless user experience.
            </p>
            <p class='text-light text-center pb-2'>
                Data that is represented is for IBM only, but if you want to 
                check other company, you need to create your API key <a href='https://www.alphavantage.co/support/#api-key' class='text-dark'>here</a>.
            </p>
            <div class='col-10 col-md-6 col-sm-8 mx-auto text-light pt-3 text-center pb-5'>
                <form method='post' class='form' id='formapi'>
                    <div class="form-group">
                        <input type="text" class="form-control" id="apiKey" name='apikey' placeholder="Enter your API key">
                    </div>
                    <button type="submit" id="getapi" class="btn btn-primary" name='apikeysub' style='display: none;'>Submit</button>
                </form>
            </div>
        </div>
        <hr class='text-light'/>
    </div>
</div>
