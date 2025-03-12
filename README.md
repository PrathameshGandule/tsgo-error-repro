# tsgo-error-repro
- Minimal repro of GitHub issue on type instantiation for tsgo
- To reproduce the error
```bash
git clone https://github.com/PrathameshGandule/tsgo-error-repro.git
```
```bash
npm i
```
- `tsc` will build perfectly fine creating a dist folder
```bash
tsc
```
- But when trying to use tsgo
```
tsgo
``` 
The error will occur as follows
```
src/index.ts:5:20 - error TS2589: Type instantiation is excessively deep and possibly infinite.

5 const userSchema = new Schema<IUser>({
                     ~~~~~~~~~~~~~~~~~~~
6   name: { type: Number, required: true }
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
7 });
  ~~


Found 1 error in src/index.ts:5

Files:             181
Types:           27083
Parse time:     0.127s
Bind time:      0.043s
Check time:     0.305s
Emit time:      0.001s
Total time:     0.476s
Memory used:   105466K
Memory allocs:  642864
```