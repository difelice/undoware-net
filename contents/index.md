---
title: Search Contact Form Uploads
template: page.jade
---



<form class="ink-form" ng-controller="uploads">
    <fieldset>
        <div class="control-group push-center">
            <label for="text-input">Enter email address of sender, leave blank for all</label>
            <div class="control large-80 append-button">
                <span><input id="text-input" type="email" placeholder="someone@somewhere.com" ng-model="sender"></span>
                <button class="ink-button" ng-click="search()"><i class="icon-search"></i> Search</button>
            </div>
        </div>
    </fieldset>
    <a stub></a>
    <div id="target">

    </div>
</form>
