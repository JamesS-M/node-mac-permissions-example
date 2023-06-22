# node-mac-permissions-example

# Getting started
1. Install (devbox.io)[https://www.jetpack.io/devbox/docs/installing_devbox/] to use as your package manager
2. `devbox shell` in this repo
3. Verify that `which python`, `which node` and `which yarn` all return results in `./.devbox/virtenv/.wrappers/bin/*` - this means that devbox is using the right versions
4. `yarn install`

# Errors
```zsh
yarn install v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
[1/2] ⠂ node-mac-permissions
error /Users/j/Documents/node-mac-permissions-reproduction/node_modules/node-mac-permissions: Command failed.
Exit code: 1
Command: node-gyp rebuild
Arguments:
Directory: /Users/j/Documents/node-mac-permissions-reproduction/node_modules/node-mac-permissions
Output:
gyp info it worked if it ends with ok
gyp info using node-gyp@9.3.1
gyp info using node@18.16.0 | darwin | arm64
gyp info find Python using Python version 3.11.3 found at "/Users/j/Documents/node-mac-permissions-reproduction/.devbox/nix/profile/default/bin/python3"
gyp info spawn /Users/j/Documents/node-mac-permissions-reproduction/.devbox/nix/profile/default/bin/python3
gyp info spawn args [
gyp info spawn args   '/nix/store/9izbif8m3jg0ddyx2d4b4bv5ahbwvqsv-nodejs-18.16.0/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py',
gyp info spawn args   'binding.gyp',
gyp info spawn args   '-f',
gyp info spawn args   'make',
gyp info spawn args   '-I',
gyp info spawn args   '/Users/j/Documents/node-mac-permissions-reproduction/node_modules/node-mac-permissions/build/config.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/nix/store/9izbif8m3jg0ddyx2d4b4bv5ahbwvqsv-nodejs-18.16.0/lib/node_modules/npm/node_modules/node-gyp/addon.gypi',
gyp info spawn args   '-I',
gyp info spawn args   '/Users/j/Library/Caches/node-gyp/18.16.0/include/node/common.gypi',
gyp info spawn args   '-Dlibrary=shared_library',
gyp info spawn args   '-Dvisibility=default',
gyp info spawn args   '-Dnode_root_dir=/Users/j/Library/Caches/node-gyp/18.16.0',
gyp info spawn args   '-Dnode_gyp_dir=/nix/store/9izbif8m3jg0ddyx2d4b4bv5ahbwvqsv-nodejs-18.16.0/lib/node_modules/npm/node_modules/node-gyp',
gyp info spawn args   '-Dnode_lib_file=/Users/j/Library/Caches/node-gyp/18.16.0/<(target_arch)/node.lib',
gyp info spawn args   '-Dmodule_root_dir=/Users/j/Documents/node-mac-permissions-reproduction/node_modules/node-mac-permissions',
gyp info spawn args   '-Dnode_engine=v8',
gyp info spawn args   '--depth=.',
gyp info spawn args   '--no-parallel',
gyp info spawn args   '--generator-output',
gyp info spawn args   'build',
gyp info spawn args   '-Goutput_dir=.'
gyp info spawn args ]
gyp info spawn make
gyp info spawn args [ 'BUILDTYPE=Release', '-C', 'build' ]
make: Entering directory '/Users/j/Documents/node-mac-permissions-reproduction/node_modules/node-mac-permissions/build'
  CC(target) Release/obj.target/nothing/../node-addon-api/nothing.o
  LIBTOOL-STATIC Release/nothing.a
warning: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool: archive library: Release/nothing.a the table of contents is empty (no object file members in the library define global symbols)
  CXX(target) Release/obj.target/permissions/permissions.o
../permissions.mm:4:9: fatal error: 'AVFoundation/AVFoundation.h' file not found
#import <AVFoundation/AVFoundation.h>
        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1 error generated.
make: *** [permissions.target.mk:136: Release/obj.target/permissions/permissions.o] Error 1
make: Leaving directory '/Users/j/Documents/node-mac-permissions-reproduction/node_modules/node-mac-permissions/build'
gyp ERR! build error
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/nix/store/9izbif8m3jg0ddyx2d4b4bv5ahbwvqsv-nodejs-18.16.0/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:203:23)
gyp ERR! stack     at ChildProcess.emit (node:events:513:28)
gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:291:12)
gyp ERR! System Darwin 22.5.0
gyp ERR! command "/nix/store/9izbif8m3jg0ddyx2d4b4bv5ahbwvqsv-nodejs-18.16.0/bin/node" "/nix/store/9izbif8m3jg0ddyx2d4b4bv5ahbwvqsv-nodejs-18.16.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/j/Documents/node-mac-permissions-reproduction/node_modules/node-mac-permissions
gyp ERR! node -v v18.16.0
gyp ERR! node-gyp -v v9.3.1
gyp ERR! not ok
```
