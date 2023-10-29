<div id='data' class='container'>
    <br/>
    <br/>
    <div class='row d-flex justify-between'>
        <!-- <h2 class='text-light text-center'>Company data</h2> -->
        <br/><hr class='text-light'/><br/>
        <div class='searchTable col-12 d-flex px-0 justify-content-between'>
            <div class='col-4 searches'>
                <form action='' method='post' class=''>
                    <div class="input-group rounded pb-2">
                        <input type="search" class="form-control text-light bg-dark search-comp rounded" name='comp' placeholder="Search for company" aria-label="Search" aria-describedby="search-addon" />
                        <button type='submit' class="input-group-text border-0" id="search-addon">
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
                        <li class="nav-item"><a class="nav-link" href="#">Dayly</a> </li>                
                        <li class="nav-item"><a class="nav-link" href="#">Monthly</a> </li>
                        <li class="nav-item"><a class="nav-link" href="#">Yearly</a> </li>
                    </ul>        
                </div>
            </div>
            <div class='col-8 dataTerminal mb-3 bg-dark text-success border rounded'></div>
        </div>
        <canvas id='chart' class='col-12 mb-3 bg-dark text-success border rounded'></canvas>
    </div>
</div>
