<div id='data' class='container'>
    <br/>
    <br/>
    <div class='row d-flex justify-between searchFilter'>
        <!-- <h2 class='text-light text-center'>Company data</h2> -->
        <br/><hr class='text-light'/><br/>
        <!-- <div class='searchTable col-12 d-flex px-0 justify-content-between'> -->
        <div class='col-lg-4 col-md-12 px-3 pb-2 px-0 col-sm-12 searches'>
            <form action='' method='post'>
                <div class="input-group rounded d-flex pb-2">
                    <input type="search" class="form-control text-light bg-dark search-comp rounded" name='comp' placeholder="Search for company" aria-label="Search" aria-describedby="search-addon" />
                    <button type='submit' class="input-group-text rounded border-dark border-2" id="search-addon">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <div class="filters bg-dark text-light border border-light rounded" id="navbarColor">
                <ul class="navbar-nav px-2">
                    <li class="nav-item">
                        <div class='dropdown'>
                            <a class='nav-link dropdown-toggle' href='#' role='button' id='minutesDropdown' data-bs-toggle='dropdown' data-bs-target='dropminutes' aria-expanded='false'>Minutes</a>
                            <ul class="dropdown-menu border-light bg-dark" id='dropminutes' aria-labelledby="minutesDropdown">
                                <li><a class="dropdown-item text-light" href="#">5</a></li>
                                <li><a class="dropdown-item text-light" href="#">30</a></li>
                                <li><a class="dropdown-item text-light" href="#">60</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#data" data-time-type="utilities/daily_scraper.php">Daily</a> </li>                
                    <li class="nav-item"><a class="nav-link" href="#data" data-time-type="utilities/weekly_scraper.php">Weekly</a> </li>
                    <li class="nav-item"><a class="nav-link" href="#data" data-time-type="utilities/monthly_scraper.php">Monthly</a> </li>
                </ul>        
            </div>
        </div>
        <div class='col-lg-8 col-sm-12 dataTerminal mb-3 bg-dark text-success border rounded'></div>
        <!-- </div> -->
        <div class='col-12 px-0'>
            <canvas id='chart' class='mb-3 bg-dark text-success border rounded'></canvas>
        </div>
    </div>
</div>
