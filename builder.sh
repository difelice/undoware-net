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

INK_HOME=stack/Ink/

set -o nounset                              # Treat unset variables as an error

cd $INK_HOME
make
cd -
dest=http://beth:Rut3shae@10.8.0.1:5984/incoming/
us=`pwd`
b=$us/build/lookup
pushd $us
git commit -am 'autocommit'
wintersmith build
rsync -av {.couchapprc,_ddoc,app.webapp} $b/
pushd $b
erica push -f --is-ddoc $dest
popd
popd

