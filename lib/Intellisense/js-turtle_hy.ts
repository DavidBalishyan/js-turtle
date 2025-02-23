/**
 *   Կրիան շարժվում է առաջ, տրված քայլերի քանակով
 *   
 *
 *   @param steps կրիայի քայլերի քանակը
 *   @return void
 */
declare function forward(steps: number): void;



/**
 *   Կրիան պտտվում է ձախ
 *   
 *
 *   @param angle անկյունը, որով պիտի պտտվի կրիան
 *   @return void
 */
declare function left(angle: number): void;



/**
 *   Կրիան պտտվում է աջ
 *    
 *
 *   @param angle անկյունը, որով պիտի պտտվի կրիան
 *   @return void
 */
declare function right(angle: number): void;


/**
 *   որոշվում է գծերի հաստությունը
 *    
 *
 *   @param thickness գծի հաստությունը
 *   @return void
 */
declare function width(thickness: number): void;


/**
 *   որոշվում է գծերի գույնը
 *    
 *
 *   @param r գույնի կոդի առաջին՝ կարմիր կոմպոնենտը,
 *            կամ գույնի անունը, 
 *            կամ 16-ական կոդը, 
 *            կամ գույնի RGB արժեքներով լցված զանգված
 *   @param g գույնի կոդի երկրորդ կոմպոնենտը՝ կանաչ
 *   @param b գույնի կոդի երրորդ կոմպոնենտը՝ կապույտ
 *   @param alpha գույնի թափանցիկությունը՝ 0֊ից 1 միջակայքում
 *   @return void
 */
declare function color(r: string|number[],g?:number, b?:number, alpha?:number): void;



/**
 *   փոխում է կրիայի դիրքը ըստ կորդինատների, գիծ չի գծում
 *    
 *
 *   @param x x կորդինատը 
 *   @param y կորդինատը
 *   @return void
 */
declare function goto(x:number, y:number): void;


/**
 *   բարձրացնում է գրիչը, դրանից հետո արված forward()-ները կտեղափոխեն կրիան, սակայն գծեր չեն գրծի
 *    
 *
 *   @return void
 */
declare function penup(): void;


/**
 *   իջեցնում է գրիչը
 *    
 *
 *   @return void
 */
declare function pendown(): void;



/**
 *   մաքրում է կտավը
 *    
 *
 *   @return void
 */
declare function clear(): void;



/**
 *   կտավի վրա գծում է կորդինատական համակարգ, նշաված քայլով
 *    
 *
 *   @param step կորդինատային համակարգի «քայլը»
 *   @return void
 */
declare function showGrid(step:number): void;


/**
 *   ընտրում է պատահական գույն
 *    
 *
 *   @return void
 */
declare function randomColor_h(): void;