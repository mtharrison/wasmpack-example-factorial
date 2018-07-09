#![feature(proc_macro, wasm_import_module, wasm_custom_section)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn factorial(n: u32) -> u32 {
    if n == 1 {
        return 1;
    }
    n * factorial(n - 1)
}

#[cfg(test)]
mod tests {

    use super::factorial;

    #[test]
    fn factorial_test() {
        assert_eq!(factorial(1), 1);
        assert_eq!(factorial(2), 2);
        assert_eq!(factorial(3), 6);
        assert_eq!(factorial(4), 24);
        assert_eq!(factorial(10), 3628800);
    }
}
