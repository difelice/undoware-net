#!/bin/bash - 
#===============================================================================
#
#          FILE: builder.sh
# 
#         USAGE: ./builder.sh 
# 
#   DESCRIPTION: 
# 
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: YOUR NAME (),
#  ORGANIZATION:
#       CREATED: 18/10/13 17:29:31 PDT
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error


us=`pwd`
user=befi
password=xai0chiK
server=localhost
protocol=http
port=5984
database=undoware
document=undoware
dest=$protocol://$user:$password@$server:$port/$database/
ink=$us/stack/Ink/


cd $ink
make
cd -
git commit -am 'autocommit'
wintersmith build
rsync -av build/undoware/ uw:~/site/
../google_appengine/appcfg.py update build/undoware --oauth2

