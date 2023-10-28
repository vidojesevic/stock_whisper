<br/>
<div id='data' class='container'>
    <div class='row d-flex justify-between'>
        <h2 class='text-light text-center'>Data</h2>
        <br/><hr class='text-light'/><br/>
        <div class='col-4 searches px-2'>
            <form action='' method='post' class='pb-2'>
                <div class="input-group rounded">
                    <input type="search" class="form-control text-light bg-dark search-comp rounded" name='comp' placeholder="Search for company" aria-label="Search" aria-describedby="search-addon" />
                    <button type='submit' class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <div class="filters bg-dark text-light rounded" id="navbarColor">
                <ul class="navbar-nav">
                    <li class="nav-item px-2 dropdown">
                        <div class='dropdown'>
                            <a class='nav-link dropdown-toggle' href='#' role='button' id='minutesDropdown' data-bs-toggle='dropdown' aria-expanded='false'>Minutes</a>
                            <ul class="dropdown-menu" aria-labelledby="minutesDropdown">
                                <li><a class="dropdown-item" href="#">5</a></li>
                                <li><a class="dropdown-item" href="#">30</a></li>
                                <li><a class="dropdown-item" href="#">60</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item px-2"><a class="nav-link" href="#">Men's</a> </li>                
                    <li class="nav-item px-2"><a class="nav-link" href="#">Home</a> </li>
                    <li class="nav-item px-2"><a class="nav-link" href="#">Monthly</a> </li>
                </ul>        
            </div>
        </div>
        <div class='col-8 dataTerminal mb-3 bg-dark text-success rounded'></div>
        <canvas id='chart' class='col-12 mb-3 bg-dark text-success rounded'></canvas>
    </div>
</div>
