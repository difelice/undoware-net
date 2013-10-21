---
title: Uploads
template: page.jade
---



<form class="ink-form" ng-controller="uploads">
    <fieldset>
        <div class="control-group">
            <div class="control large-80 append-button push-center">
                <span><input id="text-input" type="email" placeholder="someone@somewhere.com" ng-model="sender"></span>
                <button class="ink-button" ng-click="search()"><i class="icon-search"></i> Search</button>
            </div>
        </div>
    </fieldset>
    <a stub></a>
    <div id="target">

    </div>
</form>
