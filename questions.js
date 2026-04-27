const QUESTION_BANK = [

  
  { id:1, section:"Hardware", topic:"Processor",
    q:"Which component is called the 'brain' of the computer?",
    opts:["Hard Disk Drive","Central Processing Unit (CPU)","RAM","Motherboard"], ans:1, diff:"easy" },

  { id:2, section:"Hardware", topic:"Processor",
    q:"What does CPU stand for?",
    opts:["Central Processing Unit","Computer Processing Utility","Core Processing Unit","Central Program Utility"], ans:0, diff:"easy" },

  { id:3, section:"Hardware", topic:"Processor",
    q:"Which of the following is an Intel processor series?",
    opts:["Ryzen","Core i5","Snapdragon","Exynos"], ans:1, diff:"easy" },

  { id:4, section:"Hardware", topic:"Processor",
    q:"Which of the following is an AMD processor series?",
    opts:["Core i7","Pentium","Ryzen","Celeron"], ans:2, diff:"easy" },

  { id:5, section:"Hardware", topic:"Processor",
    q:"What does the CPU do with software instructions?",
    opts:["Stores them permanently","Processes and executes them","Displays them on screen","Sends them to the printer"], ans:1, diff:"medium" },

  { id:6, section:"Hardware", topic:"Processor",
    q:"Clock speed of a CPU is measured in:",
    opts:["Megabytes","Gigahertz (GHz)","Pixels","Amperes"], ans:1, diff:"medium" },

  { id:7, section:"Hardware", topic:"Processor",
    q:"Having more CPU cores means:",
    opts:["More storage space","Larger screen","More processors inside the chip","Faster internet"], ans:2, diff:"medium" },

  { id:8, section:"Hardware", topic:"Processor",
    q:"Every action performed on a computer goes through the:",
    opts:["Monitor","Keyboard","CPU","Hard Disk"], ans:2, diff:"easy" },

  
  { id:9, section:"Hardware", topic:"Storage & RAM",
    q:"RAM stands for:",
    opts:["Read Access Memory","Random Access Memory","Rapid Array Memory","Read All Memory"], ans:1, diff:"easy" },

  { id:10, section:"Hardware", topic:"Storage & RAM",
    q:"RAM is an example of:",
    opts:["Non-volatile storage","Volatile storage","Secondary storage","Permanent storage"], ans:1, diff:"easy" },

  { id:11, section:"Hardware", topic:"Storage & RAM",
    q:"When power is turned off, which memory LOSES all its data?",
    opts:["ROM","SSD","RAM","Hard Disk Drive"], ans:2, diff:"easy" },

  { id:12, section:"Hardware", topic:"Storage & RAM",
    q:"Which of these is a NON-VOLATILE storage device?",
    opts:["RAM","Cache Memory","CPU Register","Solid State Drive (SSD)"], ans:3, diff:"easy" },

  { id:13, section:"Hardware", topic:"Storage & RAM",
    q:"What is PRIMARY storage used for?",
    opts:["Storing files permanently","Directly accessed by CPU during processing","Connecting to the internet","Displaying graphics"], ans:1, diff:"medium" },

  { id:14, section:"Hardware", topic:"Storage & RAM",
    q:"Which of these is an example of PRIMARY storage?",
    opts:["Hard Disk Drive","USB Flash Drive","RAM","CD/DVD"], ans:2, diff:"medium" },

  { id:15, section:"Hardware", topic:"Storage & RAM",
    q:"Which of these is an example of SECONDARY storage?",
    opts:["RAM","Cache","CPU Register","USB Flash Drive"], ans:3, diff:"easy" },

  { id:16, section:"Hardware", topic:"Storage & RAM",
    q:"More RAM allows a computer to:",
    opts:["Run programs faster permanently","Run more programs at the same time","Store more files on disk","Use less electricity"], ans:1, diff:"medium" },

  { id:17, section:"Hardware", topic:"Storage & RAM",
    q:"Which storage type is characterized as FAST and TEMPORARY?",
    opts:["Hard Disk Drive","SSD","RAM","CD/DVD"], ans:2, diff:"easy" },

  { id:18, section:"Hardware", topic:"Storage & RAM",
    q:"What type of storage is a Memory Card?",
    opts:["Volatile — loses data on shutdown","Non-volatile — retains data permanently","Only used inside the CPU","A type of RAM"], ans:1, diff:"medium" },

  
  { id:19, section:"Hardware", topic:"ROM",
    q:"ROM stands for:",
    opts:["Random Only Memory","Read Only Memory","Rapid Output Memory","Recorded Output Module"], ans:1, diff:"easy" },

  { id:20, section:"Hardware", topic:"ROM",
    q:"ROM is characterized as:",
    opts:["Volatile memory that loses data on shutdown","Non-volatile memory that retains data permanently","Secondary storage for large files","An output device for display"], ans:1, diff:"easy" },

  { id:21, section:"Hardware", topic:"ROM",
    q:"EPROM (Erasable Programmable ROM) is erased using:",
    opts:["Electrical signals","Ultraviolet light","Extreme heat","Magnetic fields"], ans:1, diff:"hard" },

  { id:22, section:"Hardware", topic:"ROM",
    q:"EEPROM stands for:",
    opts:["Extra Erasable Programmable ROM","Electrically Erasable Programmable ROM","Extended Erasable Program ROM","Electronically Edited Program ROM"], ans:1, diff:"hard" },

  { id:23, section:"Hardware", topic:"ROM",
    q:"EEPROM can be erased using:",
    opts:["Ultraviolet light","Extreme heat","Electrical signals","Magnetic fields"], ans:2, diff:"hard" },

  { id:24, section:"Hardware", topic:"ROM",
    q:"Which type of ROM is programmed exactly ONCE and cannot be changed?",
    opts:["EPROM","EEPROM","PROM","Flash ROM"], ans:2, diff:"hard" },

  { id:25, section:"Hardware", topic:"ROM",
    q:"The main function of ROM in a computer is to:",
    opts:["Store your documents and files","Store boot instructions needed to start the computer","Act as working memory for programs","Display graphics on screen"], ans:1, diff:"medium" },

  
  { id:26, section:"Hardware", topic:"Cache Memory",
    q:"Cache memory is located:",
    opts:["On the hard disk","Inside or very near the CPU","In the monitor","On the keyboard"], ans:1, diff:"easy" },

  { id:27, section:"Hardware", topic:"Cache Memory",
    q:"Which level of Cache is the LARGEST in size but slowest among cache levels?",
    opts:["L1 Cache","L2 Cache","L3 Cache","L0 Cache"], ans:2, diff:"medium" },

  { id:28, section:"Hardware", topic:"Cache Memory",
    q:"Which level of Cache is the SMALLEST and FASTEST?",
    opts:["L3 Cache","L2 Cache","L1 Cache","L0 Cache"], ans:2, diff:"medium" },

  { id:29, section:"Hardware", topic:"Cache Memory",
    q:"Cache memory size is measured in:",
    opts:["Gigabytes (GB)","Terabytes (TB)","Kilobytes (KB) to Megabytes (MB)","Petabytes (PB)"], ans:2, diff:"medium" },

  { id:30, section:"Hardware", topic:"Cache Memory",
    q:"Cache memory stores:",
    opts:["Permanent files and documents","Frequently used data for fast CPU access","Boot instructions for the BIOS","The operating system permanently"], ans:1, diff:"medium" },

  { id:31, section:"Hardware", topic:"Cache Memory",
    q:"How many levels of cache are typically found in a modern CPU?",
    opts:["1 (L1 only)","2 (L1, L2)","3 (L1, L2, L3)","4 (L1, L2, L3, L4)"], ans:2, diff:"medium" },

  
  { id:32, section:"Hardware", topic:"Registers",
    q:"Registers are the __________ memory in a computer system.",
    opts:["Largest and slowest","Fastest and smallest","Most common type of","Permanent non-volatile"], ans:1, diff:"medium" },

  { id:33, section:"Hardware", topic:"Registers",
    q:"Where are CPU registers located?",
    opts:["On the hard disk","Inside the CPU itself","On the motherboard chipset","In the RAM modules"], ans:1, diff:"easy" },

  { id:34, section:"Hardware", topic:"Registers",
    q:"What does the Accumulator (ACC) register store?",
    opts:["The current instruction being executed","Memory addresses","Results of calculations","The next instruction's address"], ans:0, diff:"hard" },

  { id:35, section:"Hardware", topic:"Registers",
    q:"What is the correct order of the memory hierarchy from FASTEST to SLOWEST?",
    opts:["RAM → Cache → Registers → HDD","Registers → Cache → RAM → HDD/SSD","HDD → RAM → Cache → Registers","Cache → Registers → RAM → SSD"], ans:1, diff:"medium" },

  { id:36, section:"Hardware", topic:"Registers",
    q:"The Program Counter (PC) register holds:",
    opts:["The result of the last calculation","The current instruction being decoded","The address of the next instruction to execute","The total number of programs running"], ans:2, diff:"hard" },

  
  { id:37, section:"Hardware", topic:"Buses",
    q:"What is a computer bus?",
    opts:["A type of software program","A pathway used to transfer data inside a computer","A type of external storage device","A program that controls the screen"], ans:1, diff:"easy" },

  { id:38, section:"Hardware", topic:"Buses",
    q:"Which type of bus carries the ACTUAL DATA between computer components?",
    opts:["Control Bus","Address Bus","Data Bus","System Bus"], ans:2, diff:"medium" },

  { id:39, section:"Hardware", topic:"Buses",
    q:"The Address Bus is described as:",
    opts:["Bidirectional — carries data both ways","Unidirectional — CPU sends memory location","Used only by RAM modules","Part of the display system"], ans:1, diff:"medium" },

  { id:40, section:"Hardware", topic:"Buses",
    q:"Which bus carries read/write commands and timing signals?",
    opts:["Data Bus","Address Bus","Control Bus","Memory Bus"], ans:2, diff:"medium" },

  { id:41, section:"Hardware", topic:"Buses",
    q:"The Data Bus is described as:",
    opts:["Unidirectional — CPU to memory only","Bidirectional — sends data both to and from the CPU","Used only for internet connections","Carries only control signals"], ans:1, diff:"medium" },

  
  { id:42, section:"Hardware", topic:"Motherboard",
    q:"The motherboard is also known as the:",
    opts:["CPU Board","Display Board","System Board (Mainboard)","Memory Board"], ans:2, diff:"easy" },

  { id:43, section:"Hardware", topic:"Motherboard",
    q:"What is the main function of the motherboard?",
    opts:["To store large amounts of data permanently","To connect all hardware components together","To display images on the screen","To provide internet connectivity"], ans:1, diff:"easy" },

  { id:44, section:"Hardware", topic:"Motherboard",
    q:"Which component on the motherboard physically holds and connects the processor?",
    opts:["SATA Port","RAM Slot (DIMM)","CPU Socket","PCIe Expansion Slot"], ans:2, diff:"medium" },

  { id:45, section:"Hardware", topic:"Motherboard",
    q:"SATA Ports on the motherboard are used to connect:",
    opts:["RAM modules","Hard drives and SSDs","Graphics cards","Power supply"], ans:1, diff:"medium" },

  { id:46, section:"Hardware", topic:"Motherboard",
    q:"The motherboard is described as the __________ of the computer.",
    opts:["Brain","Backbone","Heart","Lungs"], ans:1, diff:"easy" },

  { id:47, section:"Hardware", topic:"Motherboard",
    q:"PCIe Expansion Slots on the motherboard are used for:",
    opts:["Connecting hard drives","Inserting RAM modules","GPU, sound card, and network card","Connecting USB devices"], ans:2, diff:"medium" },

  
  { id:48, section:"Hardware", topic:"BIOS",
    q:"BIOS stands for:",
    opts:["Basic Input Output System","Binary Input Output Storage","Boot Input Output Software","Basic Integrated Output System"], ans:0, diff:"easy" },

  { id:49, section:"Hardware", topic:"BIOS",
    q:"Where is BIOS stored?",
    opts:["On the hard disk drive","On a ROM chip on the motherboard","In RAM during operation","On the CPU itself"], ans:1, diff:"medium" },

  { id:50, section:"Hardware", topic:"BIOS",
    q:"What is the PRIMARY function of BIOS when a computer powers on?",
    opts:["Loads Microsoft Office applications","Checks all hardware and loads the Operating System","Establishes internet connection","Encrypts and saves user files"], ans:1, diff:"medium" },

  { id:51, section:"Hardware", topic:"BIOS",
    q:"What is the correct order of the boot process?",
    opts:["OS loads → BIOS activates → Power button","Desktop ready → Power button → BIOS","Power button → BIOS activates → OS loads → Desktop ready","BIOS → Power button → OS → Desktop"], ans:2, diff:"medium" },

  { id:52, section:"Hardware", topic:"BIOS",
    q:"BIOS is the __________ software that runs when you turn on your computer.",
    opts:["Last","Fastest","First","Largest"], ans:2, diff:"easy" },

  
  { id:53, section:"Hardware", topic:"Ports & Connectors",
    q:"A PORT is defined as:",
    opts:["The plug at the end of a cable","A physical opening (socket) on a computer where you plug in a device","A type of volatile RAM","An internal CPU component"], ans:1, diff:"easy" },

  { id:54, section:"Hardware", topic:"Ports & Connectors",
    q:"A CONNECTOR is defined as:",
    opts:["A socket (opening) on the computer body","The plug at the end of a cable","A type of volatile RAM","An internal CPU component"], ans:1, diff:"easy" },

  { id:55, section:"Hardware", topic:"Ports & Connectors",
    q:"Which port is used to connect a monitor or TV for high-definition display output?",
    opts:["USB Port","Audio Jack","HDMI Port","Ethernet Port"], ans:2, diff:"easy" },

  { id:56, section:"Hardware", topic:"Ports & Connectors",
    q:"Which port is used for a wired internet connection?",
    opts:["USB Port","HDMI Port","Audio Jack","Ethernet Port"], ans:3, diff:"easy" },

  { id:57, section:"Hardware", topic:"Ports & Connectors",
    q:"The VGA port is used for:",
    opts:["Connecting headphones","Older monitor or projector output","Wired internet","USB devices"], ans:1, diff:"medium" },

  { id:58, section:"Hardware", topic:"Ports & Connectors",
    q:"USB ports are commonly used to connect:",
    opts:["Monitors only","Mouse, keyboard, and pen drives","Only printers","Internet cables"], ans:1, diff:"easy" },

  
  { id:59, section:"Hardware", topic:"Operating System",
    q:"An Operating System (OS) is responsible for managing:",
    opts:["Only the CPU processing speed","Only the file storage system","Hardware, memory, files, devices, and the user interface","Only the internet and network connection"], ans:2, diff:"medium" },

  { id:60, section:"Hardware", topic:"Operating System",
    q:"Which of the following is an example of an Operating System?",
    opts:["Microsoft Word","Google Chrome","Windows 11","Adobe Photoshop"], ans:2, diff:"easy" },

  { id:61, section:"Hardware", topic:"Operating System",
    q:"Which of the following is an example of a Multi-User Operating System?",
    opts:["Windows 11 Home Edition","Linux Server / Unix","MS-DOS","Android Mobile OS"], ans:1, diff:"medium" },

  { id:62, section:"Hardware", topic:"Operating System",
    q:"A Multitasking OS allows you to:",
    opts:["Only run one program at a time","Run multiple programs simultaneously","Only serve one user","Only connect to the internet"], ans:1, diff:"easy" },

  { id:63, section:"Hardware", topic:"Operating System",
    q:"Which OS function manages which program uses the CPU and when?",
    opts:["File Management","Device Management","Process Management","User Interface"], ans:2, diff:"hard" },

  { id:64, section:"Hardware", topic:"Operating System",
    q:"The boot process step AFTER BIOS hardware check is:",
    opts:["Power button is pressed","RAM is cleared","The Operating System loads","The CPU is formatted"], ans:2, diff:"medium" },

  
  { id:65, section:"MS Word", topic:"Word Basics",
    q:"What is Microsoft Word primarily used for?",
    opts:["Creating spreadsheets","Creating and editing documents","Managing databases","Editing photos"], ans:1, diff:"easy" },

  { id:66, section:"MS Word", topic:"Word Basics",
    q:"The keyboard shortcut to SAVE a document in MS Word is:",
    opts:["Ctrl + P","Ctrl + O","Ctrl + S","Ctrl + A"], ans:2, diff:"easy" },

  { id:67, section:"MS Word", topic:"Word Basics",
    q:"The keyboard shortcut to PRINT a document in MS Word is:",
    opts:["Ctrl + S","Ctrl + P","Ctrl + A","Ctrl + F"], ans:1, diff:"easy" },

  { id:68, section:"MS Word", topic:"Word Basics",
    q:"To insert a table in MS Word, you go to:",
    opts:["Home tab → Table","Insert tab → Table","Layout tab → Table","References tab → Table"], ans:1, diff:"easy" },

  { id:69, section:"MS Word", topic:"Word Basics",
    q:"To insert a picture in MS Word, you go to:",
    opts:["Home tab → Pictures","Layout tab → Pictures","Insert tab → Pictures → This Device","Design tab → Pictures"], ans:2, diff:"easy" },

  
  { id:70, section:"MS Word", topic:"Text Formatting",
    q:"The keyboard shortcut for CENTER alignment in MS Word is:",
    opts:["Ctrl + L","Ctrl + R","Ctrl + E","Ctrl + J"], ans:2, diff:"easy" },

  { id:71, section:"MS Word", topic:"Text Formatting",
    q:"The keyboard shortcut for JUSTIFY alignment in MS Word is:",
    opts:["Ctrl + L","Ctrl + R","Ctrl + E","Ctrl + J"], ans:3, diff:"easy" },

  { id:72, section:"MS Word", topic:"Text Formatting",
    q:"The keyboard shortcut for LEFT alignment in MS Word is:",
    opts:["Ctrl + L","Ctrl + R","Ctrl + E","Ctrl + J"], ans:0, diff:"easy" },

  { id:73, section:"MS Word", topic:"Text Formatting",
    q:"JUSTIFY alignment means:",
    opts:["Text starts from the left side only","Text appears in the center","Text is spread evenly across the page with clean paragraph edges","Text is aligned to the right side"], ans:2, diff:"medium" },

  { id:74, section:"MS Word", topic:"Text Formatting",
    q:"Font Style (Font Family) in MS Word controls the:",
    opts:["Size of the text","Color of the text","Design or appearance of the text","Alignment of the text"], ans:2, diff:"easy" },

  { id:75, section:"MS Word", topic:"Text Formatting",
    q:"To change text color in MS Word, you go to:",
    opts:["Insert tab → Font Color","Home tab → Font Color","Layout tab → Font Color","Design tab → Font Color"], ans:1, diff:"easy" },

  
  { id:76, section:"MS Word", topic:"Styles & Paragraph",
    q:"The benefit of using Heading Styles in MS Word is:",
    opts:["It only changes the color","It provides consistent formatting and professional look","It only changes the font size","It only works on the first page"], ans:1, diff:"medium" },

  { id:77, section:"MS Word", topic:"Styles & Paragraph",
    q:"Which Heading style is used for the MAIN TITLE of a document?",
    opts:["Normal","Heading 2","Heading 3","Heading 1"], ans:3, diff:"easy" },

  { id:78, section:"MS Word", topic:"Styles & Paragraph",
    q:"Line Spacing in MS Word controls:",
    opts:["The font size between words","The space between lines of text","The margin at the top of the page","The number of columns"], ans:1, diff:"easy" },

  { id:79, section:"MS Word", topic:"Styles & Paragraph",
    q:"Paragraph indentation moves text:",
    opts:["To a new page","Away from the margin (inward)","To a different font","To a larger size"], ans:1, diff:"medium" },

  
  { id:80, section:"MS Word", topic:"Header & Footer",
    q:"Which Ribbon tab is used to insert a Header or Footer in Microsoft Word?",
    opts:["Home Tab","Layout Tab","Insert Tab","References Tab"], ans:2, diff:"easy" },

  { id:81, section:"MS Word", topic:"Header & Footer",
    q:"A HEADER in MS Word appears:",
    opts:["At the bottom of every page","At the top of every page","Only on the first page","In the middle of every page"], ans:1, diff:"easy" },

  { id:82, section:"MS Word", topic:"Header & Footer",
    q:"A FOOTER in MS Word appears:",
    opts:["At the top of every page","At the bottom of every page","Only on the last page","In the left margin"], ans:1, diff:"easy" },

  { id:83, section:"MS Word", topic:"Header & Footer",
    q:"Page numbers are typically placed in the:",
    opts:["Body of the document","Table of Contents","Header or Footer","Title section only"], ans:2, diff:"easy" },

  
  { id:84, section:"MS Word", topic:"Editing & Find/Replace",
    q:"The keyboard shortcut CTRL + F in MS Word is used to:",
    opts:["Format text","Find specific text in a document","Save the file","Select all content"], ans:1, diff:"easy" },

  { id:85, section:"MS Word", topic:"Editing & Find/Replace",
    q:"The keyboard shortcut CTRL + H in MS Word is used to:",
    opts:["Find specific text in a document","Find and Replace text throughout the document","Select all content","Save the document"], ans:1, diff:"easy" },

  { id:86, section:"MS Word", topic:"Editing & Find/Replace",
    q:"CTRL + A in MS Word is used to:",
    opts:["Align text to the left","Select ALL content in the document","Open a new document","Close the document"], ans:1, diff:"easy" },

  { id:87, section:"MS Word", topic:"Editing & Find/Replace",
    q:"To replace every occurrence of 'Computer' with 'Laptop' in a document, you would use:",
    opts:["Ctrl + F (Find)","Ctrl + H (Find & Replace)","Ctrl + A (Select All)","Ctrl + Z (Undo)"], ans:1, diff:"easy" },

  
  { id:88, section:"MS Word", topic:"Page Setup",
    q:"Page Setup options in MS Word are found under the:",
    opts:["Home Tab","Insert Tab","Layout Tab","References Tab"], ans:2, diff:"easy" },

  { id:89, section:"MS Word", topic:"Page Setup",
    q:"Which page orientation makes the page WIDER than it is tall?",
    opts:["Portrait","Landscape","A4","Legal"], ans:1, diff:"easy" },

  { id:90, section:"MS Word", topic:"Page Setup",
    q:"The default paper size in most Word documents is:",
    opts:["A3","Legal","A4","Letter (US)"], ans:2, diff:"medium" },

  { id:91, section:"MS Word", topic:"Page Setup",
    q:"'Narrow' margin setting in MS Word means:",
    opts:["Larger margins than default","Smaller margins — more text fits on the page","Only the top margin is changed","The page has no margins"], ans:1, diff:"medium" },

  { id:92, section:"MS Word", topic:"Page Setup",
    q:"Landscape orientation is especially useful for:",
    opts:["Short poems and letters","Tables and charts that are wide","Portrait photos","Single-column text"], ans:1, diff:"medium" },

  
  { id:93, section:"MS Word", topic:"Watermark & Page Color",
    q:"A Watermark in MS Word:",
    opts:["Only appears on the final page","Appears as faded text or image in the background of every page","Is placed inside a text box","Only becomes visible when printed"], ans:1, diff:"easy" },

  { id:94, section:"MS Word", topic:"Watermark & Page Color",
    q:"To insert a Watermark in MS Word, you go to:",
    opts:["Insert tab → Watermark","Home tab → Watermark","Design tab → Watermark","Layout tab → Watermark"], ans:2, diff:"easy" },

  { id:95, section:"MS Word", topic:"Watermark & Page Color",
    q:"Common Watermark labels used in documents are:",
    opts:["Title, Author, Chapter","DRAFT, CONFIDENTIAL, SAMPLE","Header, Footer, Body","Bold, Italic, Underline"], ans:1, diff:"easy" },

  { id:96, section:"MS Word", topic:"Watermark & Page Color",
    q:"Page Color in MS Word changes the:",
    opts:["Color of all text in the document","Background color of the entire document","Color of the page border only","Color of headers and footers only"], ans:1, diff:"easy" },

  { id:97, section:"MS Word", topic:"Watermark & Page Color",
    q:"Page Color is found under which tab in MS Word?",
    opts:["Insert Tab","Home Tab","Layout Tab","Design Tab"], ans:3, diff:"medium" },

  
  { id:98, section:"MS Word", topic:"Page Break & Section Break",
    q:"Pressing CTRL + Enter in MS Word inserts a:",
    opts:["Section Break (Next Page)","Page Break — forces text to a new page","Column Break","Paragraph Break only"], ans:1, diff:"medium" },

  { id:99, section:"MS Word", topic:"Page Break & Section Break",
    q:"A Section Break in MS Word allows:",
    opts:["Only changing the font in one section","Each section to have its own formatting","Only changing the page color","Splitting text into two columns permanently"], ans:1, diff:"medium" },

  { id:100, section:"MS Word", topic:"Page Break & Section Break",
    q:"A Page Break is used to:",
    opts:["Delete content on a page","Force text to start on a new page","Change the margin settings","Add a header to the document"], ans:1, diff:"easy" },

  
  { id:101, section:"MS Word", topic:"Hyphenation",
    q:"Hyphenation in MS Word is used to:",
    opts:["Add dashes to page numbers","Split long words at the end of a line to reduce gaps","Convert text to uppercase","Add bullet points to lists"], ans:1, diff:"medium" },

  { id:102, section:"MS Word", topic:"Hyphenation",
    q:"To enable Automatic Hyphenation, you go to:",
    opts:["Home tab → Hyphenation","Insert tab → Hyphenation","Layout tab → Hyphenation → Automatic","Design tab → Hyphenation"], ans:2, diff:"medium" },

  { id:103, section:"MS Word", topic:"Hyphenation",
    q:"Hyphenation is especially useful with which text alignment?",
    opts:["Left-aligned text","Center-aligned text","Right-aligned text","Justified text"], ans:3, diff:"hard" },

  
  { id:104, section:"MS Word", topic:"Shapes",
    q:"To insert a Shape in MS Word, you go to:",
    opts:["Home tab → Shapes","Layout tab → Shapes","Insert tab → Shapes","Design tab → Shapes"], ans:2, diff:"easy" },

  { id:105, section:"MS Word", topic:"Shapes",
    q:"After inserting a shape in Word, you can add text inside by:",
    opts:["Double-clicking and typing","Going to Insert → Text","Using Ctrl + T","Shapes cannot contain text"], ans:0, diff:"medium" },

  { id:106, section:"MS Word", topic:"Shapes",
    q:"To change the style or color of a Shape in Word, you:",
    opts:["Go to Insert tab","Right-click → Format Shape","Use Ctrl + F","Go to Layout tab"], ans:1, diff:"medium" },

  
  { id:107, section:"MS Word", topic:"Table of Contents",
    q:"To insert an automatic Table of Contents in MS Word, you navigate to:",
    opts:["Insert Tab → Table","Home Tab → Styles","References Tab → Table of Contents","View Tab → Navigation Pane"], ans:2, diff:"easy" },

  { id:108, section:"MS Word", topic:"Table of Contents",
    q:"A Table of Contents in Word is built automatically from:",
    opts:["Bold text in the document","Heading styles (Heading 1, 2, 3)","Text in the header","Bulleted lists"], ans:1, diff:"medium" },

  { id:109, section:"MS Word", topic:"Table of Contents",
    q:"To UPDATE a Table of Contents after editing the document, you:",
    opts:["Delete and reinsert it","Right-click the TOC → Update Field","Press Ctrl + U","Go to Insert → Update"], ans:1, diff:"medium" },

  
  { id:110, section:"MS Word", topic:"Footnotes & Endnotes",
    q:"A Footnote in MS Word appears:",
    opts:["At the end of the document","At the top of the page","At the bottom of the same page where it is referenced","In the header area"], ans:2, diff:"medium" },

  { id:111, section:"MS Word", topic:"Footnotes & Endnotes",
    q:"An Endnote in MS Word appears:",
    opts:["At the bottom of each page","At the top of the page","At the beginning of the document","At the end of the entire document"], ans:3, diff:"medium" },

  { id:112, section:"MS Word", topic:"Footnotes & Endnotes",
    q:"To insert a Footnote in MS Word, you go to:",
    opts:["Insert tab → Footnote","Home tab → Footnote","References tab → Insert Footnote","Layout tab → Footnote"], ans:2, diff:"medium" },

  
  { id:113, section:"MS Excel", topic:"Excel Structure",
    q:"What is Microsoft Excel primarily used for?",
    opts:["Creating presentations","Editing photos","Storing data and performing calculations in spreadsheets","Writing long documents"], ans:2, diff:"easy" },

  { id:114, section:"MS Excel", topic:"Excel Structure",
    q:"In Excel, a WORKBOOK is:",
    opts:["A single row of data","A single sheet inside a file","The entire Excel file (.xlsx)","A single cell"], ans:2, diff:"easy" },

  { id:115, section:"MS Excel", topic:"Excel Structure",
    q:"In Excel, ROWS run:",
    opts:["Vertically (up and down)","Horizontally (left to right)","Diagonally","In circles"], ans:1, diff:"easy" },

  { id:116, section:"MS Excel", topic:"Excel Structure",
    q:"In Excel, COLUMNS are labeled with:",
    opts:["Numbers (1, 2, 3...)","Letters (A, B, C...)","Roman numerals (I, II, III...)","Symbols"], ans:1, diff:"easy" },

  { id:117, section:"MS Excel", topic:"Excel Structure",
    q:"Which cell reference refers to column B, row 3?",
    opts:["3B","B-3","B3","3-B"], ans:2, diff:"easy" },

  { id:118, section:"MS Excel", topic:"Excel Structure",
    q:"To move to the next cell BELOW in Excel after typing, you press:",
    opts:["Tab","Shift + Enter","Enter","Arrow Right"], ans:2, diff:"easy" },

  { id:119, section:"MS Excel", topic:"Excel Structure",
    q:"To move to the next cell to the RIGHT in Excel, you press:",
    opts:["Enter","Tab","Backspace","Shift + Tab"], ans:1, diff:"easy" },

  
  { id:120, section:"MS Excel", topic:"AutoFill",
    q:"The AutoFill feature in Excel is activated using the:",
    opts:["Double-click on any cell","Fill Handle — small square at bottom-right of a cell","Ctrl + A shortcut","Insert tab → AutoFill"], ans:1, diff:"easy" },

  { id:121, section:"MS Excel", topic:"AutoFill",
    q:"The AutoFill feature in Excel can automatically continue:",
    opts:["Only numeric sequences (1, 2, 3…)","Only date sequences","Numbers, dates, days, months, text+numbers, and formulas","Only text patterns"], ans:2, diff:"medium" },

  { id:122, section:"MS Excel", topic:"AutoFill",
    q:"If you type 'Student 1' and 'Student 2' and use AutoFill, Excel will continue with:",
    opts:["Student A, Student B","Student 3, Student 4","Student One, Student Two","It cannot AutoFill text"], ans:1, diff:"medium" },

  { id:123, section:"MS Excel", topic:"AutoFill",
    q:"If you type 'Monday' in a cell and use AutoFill by dragging down, Excel will:",
    opts:["Repeat 'Monday' in every cell","Continue with Tuesday, Wednesday, Thursday…","Show an error","Convert it to a number"], ans:1, diff:"easy" },

  
  { id:124, section:"MS Excel", topic:"Charts",
    q:"To insert a Chart in Excel, you go to:",
    opts:["Home tab → Charts","Layout tab → Charts","Insert tab → Charts group","Data tab → Charts"], ans:2, diff:"easy" },

  { id:125, section:"MS Excel", topic:"Charts",
    q:"Which chart type is best for comparing values across categories?",
    opts:["Pie Chart","Line Chart","Column Chart / Bar Chart","Scatter Chart"], ans:2, diff:"medium" },

  { id:126, section:"MS Excel", topic:"Charts",
    q:"To rename a chart title in Excel, you:",
    opts:["Go to Insert → Chart Title","Double-click the chart title and type","Use Ctrl + T","Go to Home → Chart Title"], ans:1, diff:"easy" },

  { id:127, section:"MS Excel", topic:"Charts",
    q:"Charts in Excel help to:",
    opts:["Store more data","Visualize data and see trends quickly","Print documents faster","Connect to the internet"], ans:1, diff:"easy" },

  
  { id:128, section:"MS Excel", topic:"Number Formatting",
    q:"In Excel, applying Currency format to the number 500 displays it as:",
    opts:["500%","$500.00","500.00","5.00"], ans:1, diff:"easy" },

  { id:129, section:"MS Excel", topic:"Number Formatting",
    q:"In Excel, applying Percentage format to 0.75 displays it as:",
    opts:["0.75%","7.5%","75%","750%"], ans:2, diff:"medium" },

  { id:130, section:"MS Excel", topic:"Number Formatting",
    q:"The Number Section in Excel is found in the:",
    opts:["Insert Tab","Data Tab","Home Tab","View Tab"], ans:2, diff:"easy" },

  { id:131, section:"MS Excel", topic:"Number Formatting",
    q:"'Increase Decimal' in Excel changes 5.2 to:",
    opts:["5","52","5.20","52.0"], ans:2, diff:"medium" },

  
  { id:132, section:"MS Excel", topic:"Conditional Formatting",
    q:"Conditional Formatting in Excel automatically:",
    opts:["Sorts data in order","Changes cell color or format based on rules you set","Creates pivot tables","Freezes the top row"], ans:1, diff:"easy" },

  { id:133, section:"MS Excel", topic:"Conditional Formatting",
    q:"To apply Conditional Formatting, you go to:",
    opts:["Insert tab → Conditional Formatting","Data tab → Conditional Formatting","Home tab → Conditional Formatting","View tab → Conditional Formatting"], ans:2, diff:"easy" },

  { id:134, section:"MS Excel", topic:"Conditional Formatting",
    q:"You want cells with marks > 80 to turn Green. This is done using:",
    opts:["Data Validation","AutoFill","Conditional Formatting → Highlight Cell Rules → Greater Than","Sort & Filter"], ans:2, diff:"medium" },

  
  { id:135, section:"MS Excel", topic:"Data Validation",
    q:"Data Validation in Excel is mainly used to:",
    opts:["Format numbers as currency","Create drop-down lists and control what users can enter in cells","Sort and filter data automatically","Merge multiple cells together"], ans:1, diff:"medium" },

  { id:136, section:"MS Excel", topic:"Data Validation",
    q:"Which Excel feature allows you to create a drop-down list in a cell?",
    opts:["AutoFill","Conditional Formatting","Data Validation","Pivot Table"], ans:2, diff:"easy" },

  { id:137, section:"MS Excel", topic:"Data Validation",
    q:"To add Data Validation, you go to:",
    opts:["Home tab → Data Validation","Insert tab → Data Validation","Data tab → Data Validation → List","View tab → Data Validation"], ans:2, diff:"medium" },

  
  { id:138, section:"MS Excel", topic:"Freeze Panes",
    q:"Freeze Panes in Excel is used to:",
    opts:["Protect cells from editing","Keep rows or columns visible while scrolling","Change cell background color","Create a chart"], ans:1, diff:"easy" },

  { id:139, section:"MS Excel", topic:"Freeze Panes",
    q:"To Freeze Panes in Excel, you go to:",
    opts:["Home tab → Freeze Panes","Insert tab → Freeze Panes","View tab → Freeze Panes","Data tab → Freeze Panes"], ans:2, diff:"easy" },

  { id:140, section:"MS Excel", topic:"Freeze Panes",
    q:"Freeze Panes is especially useful when:",
    opts:["You have a very small spreadsheet","You have a large spreadsheet and want headers to stay visible","You want to add a chart","You want to apply conditional formatting"], ans:1, diff:"medium" },

  
  { id:141, section:"MS Excel", topic:"Formulas",
    q:"Which Excel formula calculates the SUM of cells A1 to A10?",
    opts:["=ADD(A1:A10)","=TOTAL(A1:A10)","=SUM(A1:A10)","=PLUS(A1:A10)"], ans:2, diff:"easy" },

  { id:142, section:"MS Excel", topic:"Formulas",
    q:"Which Excel formula calculates the AVERAGE of cells B1 to B10?",
    opts:["=MEAN(B1:B10)","=AVERAGE(B1:B10)","=AVG(B1:B10)","=MIDDLE(B1:B10)"], ans:1, diff:"easy" },

  { id:143, section:"MS Excel", topic:"Formulas",
    q:"Which Excel formula finds the HIGHEST value in a range?",
    opts:["=HIGH(A1:A10)","=TOP(A1:A10)","=LARGE(A1:A10)","=MAX(A1:A10)"], ans:3, diff:"easy" },

  { id:144, section:"MS Excel", topic:"Formulas",
    q:"Which Excel formula finds the LOWEST value in a range?",
    opts:["=LOW(A1:A10)","=MIN(A1:A10)","=BOTTOM(A1:A10)","=SMALL(A1:A10)"], ans:1, diff:"easy" },

  { id:145, section:"MS Excel", topic:"Formulas",
    q:"The formula =IF(A1>50, \"Pass\", \"Fail\") means:",
    opts:["Always write Pass","If A1 is greater than 50, write Pass; otherwise write Fail","If A1 is less than 50, write Pass","Always write Fail"], ans:1, diff:"medium" },

  { id:146, section:"MS Excel", topic:"Formulas",
    q:"The formula =TODAY() in Excel returns:",
    opts:["Yesterday's date","The time right now","Today's current date","The year only"], ans:2, diff:"easy" },

  { id:147, section:"MS Excel", topic:"Formulas",
    q:"=ROUND(A1, 2) in Excel will:",
    opts:["Multiply A1 by 2","Round A1 to 2 decimal places","Divide A1 by 2","Show A1 as a percentage"], ans:1, diff:"medium" },

  
  { id:148, section:"MS Excel", topic:"AND / OR Functions",
    q:"The AND function in Excel returns TRUE only when:",
    opts:["Any single condition among all is true","ALL specified conditions are true simultaneously","No conditions are true","At least one condition is false"], ans:1, diff:"medium" },

  { id:149, section:"MS Excel", topic:"AND / OR Functions",
    q:"The OR function in Excel returns TRUE when:",
    opts:["ALL conditions are true","NO conditions are true","AT LEAST ONE condition is true","Exactly two conditions are true"], ans:2, diff:"medium" },

  { id:150, section:"MS Excel", topic:"AND / OR Functions",
    q:"The formula =IF(AND(A1>50, B1>50), \"Pass\", \"Fail\") means:",
    opts:["Pass if A1 or B1 is above 50","Pass ONLY if BOTH A1 AND B1 are above 50","Fail if both are above 50","Pass if A1 is exactly 50"], ans:1, diff:"hard" },

  { id:151, section:"MS Excel", topic:"AND / OR Functions",
    q:"The formula =IF(OR(A1>90, B1>90), \"Top\", \"Normal\") means:",
    opts:["Top only if BOTH are above 90","Top if EITHER A1 OR B1 is above 90","Normal if both are above 90","Top only if A1 is exactly 90"], ans:1, diff:"hard" },

  
  { id:152, section:"MS Excel", topic:"Pivot Tables",
    q:"A Pivot Table in Microsoft Excel is primarily used to:",
    opts:["Draw and customize charts","Validate and restrict data entry","Summarize, analyze, and group large datasets quickly","Insert and format images"], ans:2, diff:"medium" },

  { id:153, section:"MS Excel", topic:"Pivot Tables",
    q:"To insert a Pivot Table in Excel, you go to:",
    opts:["Home tab → PivotTable","Data tab → PivotTable","Insert tab → PivotTable","View tab → PivotTable"], ans:2, diff:"easy" },

  { id:154, section:"MS Excel", topic:"Pivot Tables",
    q:"In a Pivot Table, the ROW field determines:",
    opts:["Which column to total","What categories to group data by","The chart type","The background color"], ans:1, diff:"hard" },

  
  { id:155, section:"MS Excel", topic:"Cell Formatting",
    q:"'Merge & Center' in Excel is used to:",
    opts:["Split a cell into multiple cells","Combine multiple cells into one and center the text","Format numbers as currency","Delete cell contents"], ans:1, diff:"easy" },

  { id:156, section:"MS Excel", topic:"Cell Formatting",
    q:"'Wrap Text' in Excel makes:",
    opts:["Long text overflow to the next column","Long text visible within a single cell by wrapping to multiple lines","The text rotate sideways","The text shrink in size"], ans:1, diff:"easy" },

  { id:157, section:"MS Excel", topic:"Cell Formatting",
    q:"To apply ALL BORDERS to a data table in Excel, you:",
    opts:["Go to Insert → Borders","Use Home tab → Font group → Borders → All Borders","Double-click each cell","Use Ctrl + B"], ans:1, diff:"medium" },

  
  { id:158, section:"MS Excel", topic:"Protect Sheet",
    q:"Protect Sheet in Excel is used to:",
    opts:["Create a backup of the file","Add a watermark to the sheet","Prevent users from editing cells without a password","Format cells automatically"], ans:2, diff:"medium" },

  { id:159, section:"MS Excel", topic:"Protect Sheet",
    q:"To Protect a Sheet in Excel, you go to:",
    opts:["Home tab → Protect Sheet","Insert tab → Protect Sheet","Review tab → Protect Sheet","Data tab → Protect Sheet"], ans:2, diff:"medium" },

  
  { id:160, section:"MS Excel", topic:"Data Tools",
    q:"Text to Columns in Excel is used to:",
    opts:["Merge multiple columns into one","Split text from one column into multiple columns","Sort data alphabetically","Apply conditional formatting"], ans:1, diff:"medium" },

  { id:161, section:"MS Excel", topic:"Data Tools",
    q:"Remove Duplicates in Excel is found in the:",
    opts:["Home tab","Insert tab","Data tab","View tab"], ans:2, diff:"easy" },

  { id:162, section:"MS Excel", topic:"Data Tools",
    q:"Spell Check in Excel is found under which tab, and what is its keyboard shortcut?",
    opts:["Home tab / F5","Insert tab / F6","Review tab / F7","View tab / F8"], ans:2, diff:"medium" },

  // ── NEW: VLOOKUP (Class 11) ──
  { id:163, section:"MS Excel", topic:"VLOOKUP",
    q:"What does VLOOKUP stand for?",
    opts:["Variable Lookup","Vertical Lookup","Value Lookup","Visual Lookup"], ans:1, diff:"easy" },

  { id:164, section:"MS Excel", topic:"VLOOKUP",
    q:"In =VLOOKUP(A2, Sheet2!A:C, 2, FALSE), what does the '2' represent?",
    opts:["The second worksheet","Search 2 rows down","Return value from the 2nd column of the table","Exact match type 2"], ans:2, diff:"medium" },

  { id:165, section:"MS Excel", topic:"VLOOKUP",
    q:"Setting the last argument of VLOOKUP to FALSE means:",
    opts:["Approximate match","Exact match","The formula is disabled","Case-insensitive match"], ans:1, diff:"easy" },

  { id:166, section:"MS Excel", topic:"VLOOKUP",
    q:"VLOOKUP always searches in which direction?",
    opts:["Right to left across rows","Left to right across rows","Top to bottom down the first column","Bottom to top"], ans:2, diff:"medium" },

  { id:167, section:"MS Excel", topic:"VLOOKUP",
    q:"Which error does VLOOKUP show when the lookup value is NOT found in the table?",
    opts:["#VALUE!","#REF!","#N/A","#DIV/0!"], ans:2, diff:"medium" },

  { id:168, section:"MS Excel", topic:"VLOOKUP",
    q:"You want to look up a student ID in column A and return their grade from column C. The col_index_num should be:",
    opts:["1","2","3","4"], ans:2, diff:"medium" },

  // ── NEW: Nested IF / IFS (Class 11) ──
  { id:169, section:"MS Excel", topic:"Nested IF / IFS",
    q:"=IFS(A2>=90,\"A\", A2>=80,\"B\", TRUE,\"C\") — what does TRUE do as the last condition?",
    opts:["It is a syntax error","It acts as the final 'else' fallback condition","It makes all results TRUE","It checks if A2 is TRUE"], ans:1, diff:"hard" },

  { id:170, section:"MS Excel", topic:"Nested IF / IFS",
    q:"The IFS function is available in which Excel versions?",
    opts:["All Excel versions since 2003","Excel 2010 and above","Excel 2019 and Microsoft 365 only","Only Excel 365"], ans:2, diff:"medium" },

  { id:171, section:"MS Excel", topic:"Nested IF / IFS",
    q:"What is the maximum number of nested IF levels allowed in Excel?",
    opts:["7","32","64","Unlimited"], ans:2, diff:"hard" },

  // ── NEW: HLOOKUP (Class 12) ──
  { id:172, section:"MS Excel", topic:"HLOOKUP",
    q:"HLOOKUP searches for a value in the:",
    opts:["First column of the table (vertically)","First row of the table (horizontally)","Last row of the table","Last column of the table"], ans:1, diff:"easy" },

  { id:173, section:"MS Excel", topic:"HLOOKUP",
    q:"In =HLOOKUP(\"Feb\", A1:E3, 2, FALSE), what does '2' represent?",
    opts:["The 2nd column","Return value from the 2nd row of the table","The 2nd sheet","Approximate match"], ans:1, diff:"medium" },

  { id:174, section:"MS Excel", topic:"HLOOKUP",
    q:"HLOOKUP is best used when your data headers are arranged:",
    opts:["Down a column (vertically)","Across a row (horizontally)","Diagonally","In a pivot table"], ans:1, diff:"easy" },

  // ── NEW: INDEX & MATCH (Class 13) ──
  { id:175, section:"MS Excel", topic:"INDEX & MATCH",
    q:"What does the MATCH function return?",
    opts:["The value at a position","The relative position (row/column number) of a value","A TRUE/FALSE comparison","The count of matching values"], ans:1, diff:"medium" },

  { id:176, section:"MS Excel", topic:"INDEX & MATCH",
    q:"What does INDEX(C2:C100, MATCH(\"Ali\", A2:A100, 0)) do?",
    opts:["Counts how many times Ali appears","Returns Ali's value from column C","Sums column C where A contains Ali","Sorts column C alphabetically"], ans:1, diff:"hard" },

  { id:177, section:"MS Excel", topic:"INDEX & MATCH",
    q:"One key advantage of INDEX+MATCH over VLOOKUP is:",
    opts:["It is faster to type","It can look up to the LEFT of the lookup column","It works on sorted data only","It uses less memory"], ans:1, diff:"hard" },

  // ── NEW: COUNTIF / SUMIF / AVERAGEIF (Class 14) ──
  { id:178, section:"MS Excel", topic:"COUNTIF / SUMIF / AVERAGEIF",
    q:"=COUNTIF(B2:B10, \"Pass\") will:",
    opts:["Sum all values where B says Pass","Count how many cells in B2:B10 contain Pass","Average the Pass values","Find the first Pass in the range"], ans:1, diff:"easy" },

  { id:179, section:"MS Excel", topic:"COUNTIF / SUMIF / AVERAGEIF",
    q:"=SUMIF(C2:C10, \"Math\", D2:D10) will:",
    opts:["Count how many Math entries there are","Sum values in D2:D10 only where C2:C10 contains Math","Average Math scores","Find the highest Math score"], ans:1, diff:"medium" },

  { id:180, section:"MS Excel", topic:"COUNTIF / SUMIF / AVERAGEIF",
    q:"=AVERAGEIF(A2:A10, \"Science\", B2:B10) calculates:",
    opts:["The count of Science entries","The total of Science scores","The average of B values where A equals Science","The highest Science score"], ans:2, diff:"medium" },

  { id:181, section:"MS Excel", topic:"COUNTIF / SUMIF / AVERAGEIF",
    q:"COUNTIF requires how many arguments?",
    opts:["1","2","3","4"], ans:1, diff:"easy" },

  // ── NEW: Budget Tracker / Advanced Excel (Class 17) ──
  { id:182, section:"MS Excel", topic:"Budget Tracker",
    q:"In a budget tracker, the formula =IF(D2>C2,\"Over!\",\"\") is used to:",
    opts:["Calculate total spending","Warn when expense exceeds income","Sort expenses","Format expenses as currency"], ans:1, diff:"medium" },

  // ── NEW: MS Word — Mail Merge (Class 11) ──
  { id:183, section:"MS Word", topic:"Mail Merge",
    q:"Mail Merge in MS Word combines a main document with:",
    opts:["A PDF file","A data source such as an Excel spreadsheet","Another Word document","An image file"], ans:1, diff:"easy" },

  { id:184, section:"MS Word", topic:"Mail Merge",
    q:"To start a Mail Merge in MS Word, you go to:",
    opts:["Home tab → Mail Merge","Insert tab → Mail Merge","Mailings tab → Start Mail Merge","Review tab → Mail Merge"], ans:2, diff:"easy" },

  { id:185, section:"MS Word", topic:"Mail Merge",
    q:"In Mail Merge, «First_Name» is called a:",
    opts:["Formula","Merge Field","Comment","Bookmark"], ans:1, diff:"easy" },

  { id:186, section:"MS Word", topic:"Mail Merge",
    q:"Which Mail Merge step lets you see actual data filled into the document before printing?",
    opts:["Insert Merge Fields","Select Recipients","Preview Results","Finish & Merge"], ans:2, diff:"medium" },

  { id:187, section:"MS Word", topic:"Mail Merge",
    q:"For Mail Merge, the Excel data source must NOT have:",
    opts:["Column headers in the first row","Names in column A","Merged cells or blank rows","Multiple sheets"], ans:2, diff:"hard" },

  // ── NEW: Track Changes & Comments (Class 12) ──
  { id:188, section:"MS Word", topic:"Track Changes",
    q:"Track Changes in MS Word records:",
    opts:["Only spelling errors","Every insertion, deletion, and formatting change made to the document","Only changes made by the first author","Only formatting changes"], ans:1, diff:"easy" },

  { id:189, section:"MS Word", topic:"Track Changes",
    q:"The keyboard shortcut to toggle Track Changes ON/OFF in MS Word is:",
    opts:["Ctrl + T","Ctrl + Shift + E","Ctrl + Shift + T","Alt + T"], ans:1, diff:"medium" },

  { id:190, section:"MS Word", topic:"Track Changes",
    q:"To add a Comment in MS Word, you go to:",
    opts:["Insert tab → Comment","Home tab → Comment","Review tab → New Comment","View tab → Comment"], ans:2, diff:"easy" },

  { id:191, section:"MS Word", topic:"Track Changes",
    q:"'Resolve' on a comment in MS Word means:",
    opts:["Deletes the comment permanently","Marks the comment as addressed without deleting it","Accepts all tracked changes","Rejects the suggested edit"], ans:1, diff:"medium" },

  // ── NEW: Macros & AutoText (Class 13) ──
  { id:192, section:"MS Word", topic:"Macros & AutoText",
    q:"A Macro in MS Word is:",
    opts:["A type of font style","A recorded sequence of actions that can be replayed automatically","A table template","A special page break type"], ans:1, diff:"easy" },

  { id:193, section:"MS Word", topic:"Macros & AutoText",
    q:"To record a Macro in MS Word, you go to:",
    opts:["Insert → Macro → Record","Home → Macro → Record","View → Macros → Record Macro","Review → Macro → Start"], ans:2, diff:"medium" },

  { id:194, section:"MS Word", topic:"Macros & AutoText",
    q:"AutoText in MS Word is used to:",
    opts:["Automatically correct spelling","Store reusable text snippets that can be inserted quickly","Format text automatically","Create automatic tables of contents"], ans:1, diff:"easy" },

  { id:195, section:"MS Word", topic:"Macros & AutoText",
    q:"To insert a saved AutoText entry in MS Word, you type the name and press:",
    opts:["Enter","Ctrl + Enter","F3","Tab"], ans:2, diff:"medium" },

  // ── NEW: Digital Signatures & Protection (Class 14) ──
  { id:196, section:"MS Word", topic:"Document Protection",
    q:"To add a password to a Word document so it cannot be opened without it, you go to:",
    opts:["Review → Restrict Editing","Home → Protect","File → Info → Protect Document → Encrypt with Password","Insert → Password"], ans:2, diff:"medium" },

  { id:197, section:"MS Word", topic:"Document Protection",
    q:"'Mark as Final' in MS Word:",
    opts:["Locks the document with a password","Makes the document read-only but does not prevent editing","Permanently deletes the document","Sends the document for review"], ans:1, diff:"medium" },

  { id:198, section:"MS Word", topic:"Document Protection",
    q:"To add a Digital Signature to a Word document, you go to:",
    opts:["Insert → Signature Line","Home → Digital Sign","Review → Add Signature","File → Sign Document"], ans:0, diff:"medium" },

  // ── NEW: Citations & Bibliography (Class 15) ──
  { id:199, section:"MS Word", topic:"Citations & Bibliography",
    q:"To insert a citation in MS Word, you go to:",
    opts:["Insert → Citation","Home → Citation","References → Insert Citation","Review → Citation"], ans:2, diff:"easy" },

  { id:200, section:"MS Word", topic:"Citations & Bibliography",
    q:"APA citation style is commonly used in:",
    opts:["Literature and Arts","Psychology, Education, and Sciences","History and Law","Computer Science only"], ans:1, diff:"medium" },

  { id:201, section:"MS Word", topic:"Citations & Bibliography",
    q:"To generate an automatic Bibliography in MS Word, you go to:",
    opts:["Insert → Bibliography","Home → Bibliography","References → Bibliography","View → Bibliography"], ans:2, diff:"easy" },

  // ── NEW: Hardware — Input & Output Devices (Class 11) ──
  { id:202, section:"Hardware", topic:"Input & Output Devices",
    q:"Which of these is an INPUT device?",
    opts:["Monitor","Printer","Speaker","Scanner"], ans:3, diff:"easy" },

  { id:203, section:"Hardware", topic:"Input & Output Devices",
    q:"Which of these is an OUTPUT device?",
    opts:["Keyboard","Mouse","Projector","Touch Screen"], ans:2, diff:"easy" },

  { id:204, section:"Hardware", topic:"Input & Output Devices",
    q:"A Touch Screen is classified as:",
    opts:["Output only","Input only","Both input and output","Neither input nor output"], ans:2, diff:"medium" },

  { id:205, section:"Hardware", topic:"Input & Output Devices",
    q:"Which port is most commonly used to connect modern input devices like keyboards and mice?",
    opts:["HDMI","VGA","USB","Ethernet"], ans:2, diff:"easy" },

  { id:206, section:"Hardware", topic:"Input & Output Devices",
    q:"Which monitor specification refers to how many times the screen refreshes per second?",
    opts:["Resolution","Brightness (nits)","Refresh rate (Hz)","Panel size (inches)"], ans:2, diff:"medium" },

  { id:207, section:"Hardware", topic:"Input & Output Devices",
    q:"A Laser printer is best suited for:",
    opts:["Printing photographs with high color quality","High-speed office document printing","Printing receipts at a point of sale","Creating 3D prototypes"], ans:1, diff:"medium" },

  { id:208, section:"Hardware", topic:"Input & Output Devices",
    q:"Which input device converts physical documents into digital data?",
    opts:["Monitor","Printer","Scanner","Speaker"], ans:2, diff:"easy" },

  { id:209, section:"Hardware", topic:"Input & Output Devices",
    q:"DLP and LCD are technologies used in which output device?",
    opts:["Printer","Monitor","Projector","Speaker"], ans:2, diff:"hard" },

  // ── NEW: PSU (Class 12) ──
  { id:210, section:"Hardware", topic:"Power Supply Unit",
    q:"What does PSU stand for?",
    opts:["Primary System Unit","Power Storage Utility","Power Supply Unit","Processing Speed Unit"], ans:2, diff:"easy" },

  { id:211, section:"Hardware", topic:"Power Supply Unit",
    q:"The PSU converts which type of current to power computer components?",
    opts:["DC to AC","AC to DC","DC to DC","AC to AC"], ans:1, diff:"easy" },

  { id:212, section:"Hardware", topic:"Power Supply Unit",
    q:"Which PSU form factor is the most common in desktop computers?",
    opts:["SFX","TFX","ATX","Mini-ITX"], ans:2, diff:"medium" },

  { id:213, section:"Hardware", topic:"Power Supply Unit",
    q:"A high-end gaming PC typically requires a PSU of at least:",
    opts:["150–200W","300–400W","500–650W","750–850W"], ans:3, diff:"medium" },

  { id:214, section:"Hardware", topic:"Power Supply Unit",
    q:"In a Fully Modular PSU:",
    opts:["All cables are permanently attached","Only the main cables are fixed; extras are detachable","All cables are detachable","There are no cables — it uses wireless power"], ans:2, diff:"medium" },

  { id:215, section:"Hardware", topic:"Power Supply Unit",
    q:"The 80+ rating on a PSU refers to:",
    opts:["The maximum wattage output","The efficiency at converting AC to DC power","The number of connectors it has","The voltage output in volts"], ans:1, diff:"hard" },

  { id:216, section:"Hardware", topic:"Power Supply Unit",
    q:"Which PSU component converts AC power into raw DC power?",
    opts:["Transformer","Rectifier","Filter Capacitor","Voltage Regulator"], ans:1, diff:"hard" },

  // ── NEW: GPU (Class 13) ──
  { id:217, section:"Hardware", topic:"GPU",
    q:"What does GPU stand for?",
    opts:["General Processing Unit","Graphics Processing Unit","Global Power Unit","Graphical Program Utility"], ans:1, diff:"easy" },

  { id:218, section:"Hardware", topic:"GPU",
    q:"An Integrated GPU is:",
    opts:["A separate card with its own VRAM","Built into the CPU chip and shares system RAM","A GPU used only in servers","A GPU specifically for cryptocurrency mining"], ans:1, diff:"easy" },

  { id:219, section:"Hardware", topic:"GPU",
    q:"Which of the following is an example of a dedicated GPU?",
    opts:["Intel UHD Graphics","AMD Radeon Vega (Ryzen APU)","NVIDIA GeForce RTX 4060","Apple M-series GPU cores"], ans:2, diff:"medium" },

  { id:220, section:"Hardware", topic:"GPU",
    q:"Compared to a CPU, a GPU has:",
    opts:["Fewer but much faster cores","Thousands of smaller cores optimized for parallel tasks","The same number of cores","Larger cores focused on sequential tasks"], ans:1, diff:"medium" },

  { id:221, section:"Hardware", topic:"GPU",
    q:"GPUs were originally designed for which purpose?",
    opts:["Running operating systems","Processing and rendering graphics and video","Managing RAM allocation","Controlling storage devices"], ans:1, diff:"easy" },

  // ── NEW: Software & Types (Class 14) ──
  { id:222, section:"Software", topic:"Types of Software",
    q:"Which type of software manages hardware and provides a platform for other software?",
    opts:["Application Software","Utility Software","System Software","Firmware"], ans:2, diff:"easy" },

  { id:223, section:"Software", topic:"Types of Software",
    q:"MS Word, Google Chrome, and VLC Player are examples of:",
    opts:["System Software","Application Software","Utility Software","Programming Tools"], ans:1, diff:"easy" },

  { id:224, section:"Software", topic:"Types of Software",
    q:"Antivirus programs, WinRAR, and CCleaner are examples of:",
    opts:["Application Software","System Software","Utility Software","Operating Systems"], ans:2, diff:"easy" },

  { id:225, section:"Software", topic:"Types of Software",
    q:"Which of the following is an example of System Software?",
    opts:["Adobe Photoshop","Microsoft Excel","Windows 11","Google Chrome"], ans:2, diff:"easy" },

  { id:226, section:"Software", topic:"Types of Software",
    q:"The FIRST software ever written was by:",
    opts:["Bill Gates","Alan Turing","Ada Lovelace","Charles Babbage"], ans:2, diff:"hard" },

  // ── NEW: Programming Languages (Class 15) ──
  { id:227, section:"Software", topic:"Programming Languages",
    q:"A low-level programming language is:",
    opts:["Closer to human language and easier to read","Closer to machine hardware, written in binary or assembly","Always interpreted, never compiled","The same as a scripting language"], ans:1, diff:"easy" },

  { id:228, section:"Software", topic:"Programming Languages",
    q:"Which of the following is a HIGH-LEVEL programming language?",
    opts:["Machine Code","Assembly Language","Python","Binary"], ans:2, diff:"easy" },

  { id:229, section:"Software", topic:"Programming Languages",
    q:"A COMPILER translates code:",
    opts:["Line by line while running","All at once before running — creating an executable file","Only when errors are found","At runtime, without creating a file"], ans:1, diff:"medium" },

  { id:230, section:"Software", topic:"Programming Languages",
    q:"An INTERPRETER translates code:",
    opts:["Entirely before execution — creating a .exe file","Line by line simultaneously while running","Only in Python and JavaScript","Only on Windows computers"], ans:1, diff:"medium" },

  { id:231, section:"Software", topic:"Programming Languages",
    q:"Python is used primarily in which field(s)?",
    opts:["Only game development","Only mobile apps","AI, web development, data science, and automation","Only embedded systems"], ans:2, diff:"medium" },

  { id:232, section:"Software", topic:"Programming Languages",
    q:"Java is described as 'Write Once, Run Anywhere' because:",
    opts:["It compiles to machine code for each OS","It uses an interpreter that works everywhere","It compiles to bytecode that runs on any device with a JVM","It is open source"], ans:2, diff:"hard" },

  { id:233, section:"Software", topic:"Programming Languages",
    q:"C++ is commonly used to build:",
    opts:["Only web applications","Video games, operating systems, and embedded systems","Only database management systems","Only mobile applications"], ans:1, diff:"medium" },

  // ── NEW: Viruses & Antivirus (Class 16) ──
  { id:234, section:"Software", topic:"Viruses & Antivirus",
    q:"Which type of computer virus hides inside document macros and runs when the file is opened?",
    opts:["Boot Sector Virus","File Infector Virus","Macro Virus","Ransomware"], ans:2, diff:"medium" },

  { id:235, section:"Software", topic:"Viruses & Antivirus",
    q:"Ransomware is a virus that:",
    opts:["Displays unwanted advertisements","Self-replicates across networks without interaction","Encrypts all files and demands a ransom payment","Attaches to executable .exe files"], ans:2, diff:"easy" },

  { id:236, section:"Software", topic:"Viruses & Antivirus",
    q:"A Trojan Horse virus is described as:",
    opts:["A self-replicating worm","Legitimate-looking software that secretly gives attackers remote access","A virus that infects the boot sector","A virus that only targets mobile devices"], ans:1, diff:"easy" },

  { id:237, section:"Software", topic:"Viruses & Antivirus",
    q:"Which antivirus method detects NEW threats by analyzing suspicious behavior?",
    opts:["Signature Scanning","Real-Time Protection","Heuristic Analysis","Sandboxing"], ans:2, diff:"hard" },

  { id:238, section:"Software", topic:"Viruses & Antivirus",
    q:"A Worm differs from a regular virus because it:",
    opts:["Requires a host file to spread","Self-replicates across networks WITHOUT human interaction","Only spreads through USB drives","Always encrypts files"], ans:1, diff:"medium" },

  { id:239, section:"Software", topic:"Viruses & Antivirus",
    q:"Which of the following is NOT a common way viruses spread?",
    opts:["Infected USB drives","Email attachments","Reading a printed document","Malicious websites"], ans:2, diff:"easy" },

  // ── NEW: Cloud Computing (Class 17) ──
  { id:240, section:"Software", topic:"Cloud Computing",
    q:"Cloud computing means:",
    opts:["Storing data only on a physical hard drive","Storing and accessing data and programs over the internet","Running software without installing it locally (always)","Using atmospheric data for weather predictions"], ans:1, diff:"easy" },

  { id:241, section:"Software", topic:"Cloud Computing",
    q:"Which type of cloud is shared infrastructure available to any organization?",
    opts:["Private Cloud","Hybrid Cloud","Public Cloud","Community Cloud"], ans:2, diff:"easy" },

  { id:242, section:"Software", topic:"Cloud Computing",
    q:"Google Drive, iCloud, and OneDrive are examples of:",
    opts:["Private cloud storage services","Public cloud storage services","Hybrid cloud solutions","Local network drives"], ans:1, diff:"easy" },

  { id:243, section:"Software", topic:"Cloud Computing",
    q:"A Hybrid Cloud is best described as:",
    opts:["A cloud used only by government organizations","A dedicated private cloud for one company","A combination of public and private cloud for flexibility and security","A cloud that only stores data, not programs"], ans:2, diff:"medium" },

  // ── NEW: Cybersecurity (Class 18) ──
  { id:244, section:"Software", topic:"Cybersecurity",
    q:"Phishing is a cyber attack where:",
    opts:["A server is overwhelmed with traffic","Fake emails or websites trick users into giving away passwords","Hidden software monitors your activity","Unauthorized access is gained to a system"], ans:1, diff:"easy" },

  { id:245, section:"Software", topic:"Cybersecurity",
    q:"A DoS (Denial of Service) attack works by:",
    opts:["Stealing login credentials from a database","Overloading a server with traffic to make it unavailable","Installing spyware on the victim's device","Sending phishing emails to users"], ans:1, diff:"medium" },

  { id:246, section:"Software", topic:"Cybersecurity",
    q:"Which of the following is a rule for creating a strong password?",
    opts:["Use your name and birthday for easy recall","Use at least 12 characters with uppercase, lowercase, numbers, and symbols","Use the same password on all accounts for convenience","Use only letters for simplicity"], ans:1, diff:"easy" },

  { id:247, section:"Software", topic:"Cybersecurity",
    q:"Two-Factor Authentication (2FA) improves security by:",
    opts:["Requiring a longer password","Adding a second verification step beyond just the password","Encrypting all stored files","Blocking all incoming network traffic"], ans:1, diff:"easy" },

  { id:248, section:"Software", topic:"Cybersecurity",
    q:"Spyware is best described as:",
    opts:["Software that displays ads on your screen","Software that replicates itself across a network","Hidden software that secretly monitors and records your activity","Software that encrypts your files for ransom"], ans:2, diff:"medium" },

  { id:249, section:"Software", topic:"Cybersecurity",
    q:"Social Engineering in cybersecurity refers to:",
    opts:["Building social networking websites","Manipulating people psychologically to reveal confidential information","Using AI to create social media posts","Hacking through technical software vulnerabilities"], ans:1, diff:"medium" },

  // ── NEW: AI Basics (Class 19) ──
  { id:250, section:"Software", topic:"Artificial Intelligence",
    q:"Artificial Intelligence (AI) refers to:",
    opts:["Hardware that processes data faster than humans","Software programmed to think, learn, and make decisions like humans","The internet's ability to connect devices globally","Any program that uses a database"], ans:1, diff:"easy" },

  { id:251, section:"Software", topic:"Artificial Intelligence",
    q:"ChatGPT is an example of which type of AI tool?",
    opts:["Image recognition AI","Voice assistant","Text-based AI that generates human-like responses","Robotics AI"], ans:2, diff:"easy" },

  { id:252, section:"Software", topic:"Artificial Intelligence",
    q:"AI learns patterns from:",
    opts:["Physical sensors only","Hard-coded rules only","Training data","The internet connection speed"], ans:2, diff:"medium" },

  // ── NEW: Internet & WWW (Class 20) ──
  { id:253, section:"Software", topic:"Internet & WWW",
    q:"The World Wide Web (WWW) is:",
    opts:["The same as the internet","A collection of web pages linked together that runs ON TOP of the internet","A type of network cable","An operating system for servers"], ans:1, diff:"easy" },

  { id:254, section:"Software", topic:"Internet & WWW",
    q:"DNS (Domain Name System) is used to:",
    opts:["Send emails securely","Convert human-readable domain names to IP addresses","Measure internet connection speed","Encrypt website data"], ans:1, diff:"medium" },

  { id:255, section:"Software", topic:"Internet & WWW",
    q:"An IP address is best described as:",
    opts:["A website's password","A unique numerical address assigned to every device on a network","The internet service provider's name","The name of a web browser"], ans:1, diff:"easy" },

  { id:256, section:"Software", topic:"Internet & WWW",
    q:"Which of the following is a web BROWSER?",
    opts:["Google Search","YouTube","Google Chrome","Gmail"], ans:2, diff:"easy" },

  { id:257, section:"Software", topic:"Internet & WWW",
    q:"When you type a URL into your browser, which process converts it to an IP address?",
    opts:["HTTP Protocol","DNS Lookup","SSL Encryption","IP Routing"], ans:1, diff:"medium" },
];

const WORD_TASK_BANK = [
  { id:"W01", marks:2, topic:"Styles",
    desc:"Apply <strong>Heading 1</strong> style to the main document title and <strong>Heading 2</strong> to each hardware topic sub-section. (Home tab → Styles group)" },
  { id:"W02", marks:3, topic:"Table of Contents",
    desc:"Insert an <strong>Automatic Table of Contents</strong> at the very beginning of the document. (References tab → Table of Contents → Automatic Table 1)" },
  { id:"W03", marks:3, topic:"Header & Footer",
    desc:"Add a <strong>Header</strong> showing the document title on the left. Add a <strong>Footer</strong> with your Roll Number on the left and today's date on the right. (Insert tab → Header / Footer)" },
  { id:"W04", marks:2, topic:"Watermark",
    desc:"Insert a <strong>Watermark</strong> with the text <em>'DRAFT'</em> visible in the background of all pages. (Design tab → Watermark → DRAFT)" },
  { id:"W05", marks:2, topic:"Page Setup",
    desc:"Change the <strong>Page Setup</strong>: Set Margins to <em>Narrow</em>, Orientation to <em>Portrait</em>, and Paper Size to <em>A4</em>. (Layout tab → Page Setup group)" },
  { id:"W06", marks:1, topic:"Page Color",
    desc:"Change the <strong>Page Color</strong> to a light color of your choice. (Design tab → Page Color)" },
  { id:"W07", marks:2, topic:"Page Break",
    desc:"Insert a <strong>Page Break</strong> before each hardware topic so every topic starts on a fresh page. (Ctrl + Enter OR Insert tab → Pages → Page Break)" },
  { id:"W08", marks:2, topic:"Footnote",
    desc:"Add at least <strong>one Footnote</strong> at the bottom of any page referencing a source or textbook. (References tab → Insert Footnote)" },
  { id:"W09", marks:2, topic:"Find & Replace",
    desc:"Use <strong>Find &amp; Replace</strong> (Ctrl+H) to replace the word <em>'computer'</em> with <em>'Computer'</em> (capital C) throughout the entire document." },
  { id:"W10", marks:3, topic:"Table",
    desc:"Insert a <strong>Table</strong> at the end of the document with 3 columns: <em>Component | Type | Description</em>. Fill in at least 5 hardware components with descriptions." },
  { id:"W11", marks:1, topic:"Hyphenation",
    desc:"Enable <strong>Automatic Hyphenation</strong> for the entire document. (Layout tab → Hyphenation → Automatic)" },
  { id:"W12", marks:2, topic:"Font & Alignment",
    desc:"Change the body text font to <strong>Times New Roman, Size 12</strong>. Apply <strong>Justify</strong> alignment to all body paragraphs (Ctrl+J)." },
  { id:"W13", marks:2, topic:"Section Break",
    desc:"Insert a <strong>Section Break (Next Page)</strong> between the Table of Contents and the first hardware topic. (Insert → Breaks → Next Page Section Break)" },
  { id:"W14", marks:2, topic:"Shapes",
    desc:"Insert a <strong>Shape</strong> (e.g., a rectangle) on any page to represent a hardware component. Add a text label inside the shape. (Insert tab → Shapes)" },
  { id:"W15", marks:2, topic:"Endnote",
    desc:"Add an <strong>Endnote</strong> at the end of the document listing all references. (References tab → Insert Endnote)" },
  { id:"W16", marks:2, topic:"Table of Contents",
    desc:"After completing all tasks, <strong>Update the Table of Contents</strong>: right-click the TOC → Update Field → Update entire table. Save with Ctrl+S." },
  { id:"W17", marks:2, topic:"Text Formatting",
    desc:"Apply <strong>Bold</strong> formatting to all headings and <strong>Italic</strong> to any technical terms (e.g., CPU, RAM, SSD) in the document. (Home tab → Font group)" },
  { id:"W18", marks:2, topic:"Text Color",
    desc:"Change the color of all <strong>Heading 1</strong> text to <em>Dark Blue</em> and all <strong>Heading 2</strong> text to <em>Dark Teal</em>. (Home tab → Font Color)" },
  { id:"W19", marks:1, topic:"Line Spacing",
    desc:"Set the <strong>Line Spacing</strong> of all body paragraphs to <em>1.5 lines</em>. (Home tab → Paragraph → Line Spacing)" },
  { id:"W20", marks:2, topic:"Page Numbers",
    desc:"Insert <strong>Page Numbers</strong> at the bottom center of every page. (Insert tab → Page Number → Bottom of Page → Center)" },
  { id:"W21", marks:2, topic:"Lists",
    desc:"Add a <strong>Numbered List</strong> of at least 5 hardware components anywhere in the document. Apply <strong>Bullet Points</strong> to their descriptions. (Home tab → Paragraph)" },
  { id:"W22", marks:2, topic:"Indentation",
    desc:"Apply a <strong>First Line Indent</strong> of 1 cm to all body paragraphs. (Home tab → Paragraph → Indentation → First Line)" },
  { id:"W23", marks:2, topic:"Borders",
    desc:"Add a <strong>Page Border</strong> to the entire document using any line style. (Design tab → Page Borders)" },
  { id:"W24", marks:2, topic:"Columns",
    desc:"Format one section of the document (any one hardware topic) to display in <strong>Two Columns</strong>. (Layout tab → Columns → Two)" },
  { id:"W25", marks:2, topic:"Spell Check",
    desc:"Run the <strong>Spell Check</strong> on the entire document and correct any errors found. (Review tab → Spelling & Grammar, or press F7)" },
  { id:"W26", marks:2, topic:"Track Changes",
    desc:"Turn on <strong>Track Changes</strong>, make three edits to the document, then accept all changes. (Review tab → Track Changes)" },
  { id:"W27", marks:2, topic:"Picture",
    desc:"Insert a <strong>picture</strong> related to computer hardware anywhere in the document. Resize it and apply a picture border. (Insert tab → Pictures)" },
  { id:"W28", marks:2, topic:"Text Box",
    desc:"Insert a <strong>Text Box</strong> containing a short definition of CPU or RAM. Position it in the margin area. (Insert tab → Text Box)" },
  { id:"W29", marks:2, topic:"Landscape Section",
    desc:"Create a section that uses <strong>Landscape orientation</strong> to display the hardware comparison table. Other sections should remain Portrait. (Layout tab → Orientation)" },
  { id:"W30", marks:2, topic:"Cover Page",
    desc:"Insert a formatted <strong>Cover Page</strong> at the beginning of the document with the document title, your name, and the date. (Insert tab → Cover Page)" },

  // ── NEW TASKS from Classes 11–17 ──
  { id:"W31", marks:3, topic:"Mail Merge",
    desc:"Use <strong>Mail Merge</strong> to create personalized invitation letters for at least 5 students. Create an Excel data source with columns: <em>First_Name, Last_Name, Class, Event_Date, Venue</em>. Insert all merge fields into the letter body. (Mailings tab → Start Mail Merge → Letters)" },

  { id:"W32", marks:2, topic:"Mail Merge",
    desc:"After setting up your Mail Merge, use <strong>Preview Results</strong> to verify the first 3 records, then use <strong>Finish &amp; Merge → Edit Individual Documents</strong> to generate all letters in one file. (Mailings tab)" },

  { id:"W33", marks:2, topic:"Track Changes",
    desc:"Enable <strong>Track Changes</strong> (Review tab → Track Changes or Ctrl+Shift+E). Make at least 5 edits — including insertions, deletions, and formatting changes. Then <strong>Accept</strong> 3 changes and <strong>Reject</strong> 2 using the Review tab." },

  { id:"W34", marks:2, topic:"Comments",
    desc:"Add <strong>3 Comments</strong> in the document suggesting improvements (e.g., recommend adding an image, expanding a section, correcting a term). Reply to one comment, then <strong>Resolve</strong> another. (Review tab → New Comment)" },

  { id:"W35", marks:3, topic:"Macros",
    desc:"Record a <strong>Macro</strong> that applies: Bold formatting, Font size 14, and Center alignment. Assign it a keyboard shortcut (e.g., Ctrl+Shift+M). Test it on at least two paragraphs. (View tab → Macros → Record Macro)" },

  { id:"W36", marks:2, topic:"AutoText",
    desc:"Save your full name and school name as an <strong>AutoText</strong> entry. Name the entry 'myschool'. Practice inserting it using the F3 key. (Insert → Quick Parts → AutoText → Save Selection to AutoText Gallery)" },

  { id:"W37", marks:2, topic:"Document Protection",
    desc:"<strong>Protect the document</strong> with a password so it cannot be opened without it: File → Info → Protect Document → Encrypt with Password. Then enable <strong>Restrict Editing</strong> to allow Comments only. (Review tab → Restrict Editing)" },

  { id:"W38", marks:2, topic:"Digital Signature",
    desc:"Insert a <strong>Signature Line</strong> at the end of the document. Fill in the signer's name, title, and email. (Insert tab → Signature Line). Then <strong>Mark as Final</strong> to make the document read-only. (File → Info → Protect Document → Mark as Final)" },

  { id:"W39", marks:3, topic:"Citations & Bibliography",
    desc:"Add at least <strong>3 Citations</strong> using <strong>APA style</strong> — include one book, one website, and one journal article as sources. (References tab → Insert Citation → Add New Source). Then insert an automatic <strong>Bibliography</strong> at the end of the document. (References → Bibliography)" },

  { id:"W40", marks:2, topic:"Citations & Bibliography",
    desc:"Use <strong>Manage Sources</strong> (References tab) to review all citations. Change the citation style from APA to <strong>MLA</strong> and observe how the in-text citations and bibliography update automatically." },

  { id:"W41", marks:3, topic:"CV / Resume",
    desc:"Create a professional <strong>CV / Resume</strong> document with the following sections: Personal Information, Education, Work Experience, Skills, and References. Use <strong>Heading 1</strong> for section titles, <strong>Calibri 11pt</strong> body font, consistent spacing, and save as PDF. Keep it under 2 pages." },

  { id:"W42", marks:2, topic:"Poster / Flyer Design",
    desc:"Design a one-page <strong>school event flyer</strong>: set <strong>Narrow margins</strong>, add a colored <strong>Page Background</strong>, insert at least 2 <strong>Shapes</strong> as decorative banners, add an <strong>Image</strong> with Tight text wrap, and use at least 2 different text boxes for event title and details." },
];

const EXCEL_TASK_BANK = [
  { id:"E01", marks:2, topic:"Merge & Center",
    desc:"Select cells <strong>A1:H1</strong> and use <strong>Merge &amp; Center</strong>. Type the heading <em>'Student Results — Final Exam'</em>. Apply Bold, Font Size 14, and Blue font color." },
  { id:"E02", marks:2, topic:"SUM Formula",
    desc:"Use a <strong>SUM formula</strong> in column F to calculate Total marks (Math + English + Science + IT) for each student. E.g. <code>=SUM(B2:E2)</code>" },
  { id:"E03", marks:2, topic:"AVERAGE Formula",
    desc:"Use an <strong>AVERAGE formula</strong> in column G to calculate the average marks per student. E.g. <code>=AVERAGE(B2:E2)</code>" },
  { id:"E04", marks:3, topic:"IF Formula",
    desc:"Use a <strong>nested IF formula</strong> in column H for Grade: Average ≥ 85 → <em>'A'</em>, Average ≥ 70 → <em>'B'</em>, Average ≥ 55 → <em>'C'</em>, else → <em>'F'</em>." },
  { id:"E05", marks:2, topic:"Conditional Formatting",
    desc:"Apply <strong>Conditional Formatting</strong> on the Total column: highlight cells <strong>&gt; 320 in Green</strong> and cells <strong>&lt; 240 in Red</strong>. (Home → Conditional Formatting → Highlight Cell Rules)" },
  { id:"E06", marks:2, topic:"Data Validation",
    desc:"Add <strong>Data Validation</strong> on the Grade column to create a Drop-Down list with options: A, B, C, F. (Data tab → Data Validation → Allow: List)" },
  { id:"E07", marks:3, topic:"Column Chart",
    desc:"Create a <strong>Column Chart</strong> on a new sheet showing each student's Total marks. Add chart title: <em>'Student Total Marks'</em>. Label axes and customize bar colors." },
  { id:"E08", marks:3, topic:"Pivot Table",
    desc:"Create a <strong>Pivot Table</strong> on Sheet 3. Set Row = Student Name, Values = Average of Math, English, Science, and IT separately." },
  { id:"E09", marks:1, topic:"Sort",
    desc:"<strong>Sort</strong> the data on Sheet 1 by Total marks in <strong>Descending order</strong>. (Data tab → Sort → Column F → Largest to Smallest)" },
  { id:"E10", marks:1, topic:"Freeze Panes",
    desc:"<strong>Freeze the top two rows</strong> so headers stay visible when scrolling. (View tab → Freeze Panes → Freeze Top Row)" },
  { id:"E11", marks:2, topic:"Number Formatting",
    desc:"Format the <strong>Total column</strong> as Number with 0 decimal places. Format the <strong>Average column</strong> to show exactly 2 decimal places. (Home tab → Number Section)" },
  { id:"E12", marks:2, topic:"AND Function",
    desc:"Use the <strong>AND function</strong> in column I titled <em>'Pass All?'</em>: return TRUE if the student scored above 55 in ALL four subjects. E.g. <code>=AND(B2>55, C2>55, D2>55, E2>55)</code>" },
  { id:"E13", marks:2, topic:"OR Function",
    desc:"Use the <strong>OR function</strong> in column J titled <em>'Top Subject?'</em>: return TRUE if the student scored above 90 in ANY one subject. E.g. <code>=OR(B2>90, C2>90, D2>90, E2>90)</code>" },
  { id:"E14", marks:2, topic:"Borders & Alignment",
    desc:"Apply <strong>Wrap Text and Center alignment</strong> to all header cells. Apply <strong>All Borders</strong> to the entire data table." },
  { id:"E15", marks:3, topic:"Summary Sheet",
    desc:"Add a new sheet named <em>'Summary'</em>. Display: <strong>Highest Total</strong> (MAX), <strong>Lowest Total</strong> (MIN), and <strong>Class Average</strong> (AVERAGE) referencing Sheet 1 data." },
  { id:"E16", marks:1, topic:"Protect Sheet",
    desc:"<strong>Protect Sheet 1</strong> with the password <em>'IT2024'</em> so no edits can be made without the password. (Review tab → Protect Sheet)" },
  { id:"E17", marks:2, topic:"MAX / MIN",
    desc:"In a new row labeled 'Class Best', use <strong>MAX</strong> to find the highest mark in each subject column. In a row labeled 'Class Lowest', use <strong>MIN</strong>. E.g. <code>=MAX(B2:B9)</code>" },
  { id:"E18", marks:2, topic:"Currency Format",
    desc:"Add a new column called <em>'Scholarship (PKR)'</em>. Students with Average ≥ 85 get 5000, others get 0. Format the column as <strong>Currency</strong> with 0 decimal places." },
  { id:"E19", marks:2, topic:"Conditional Formatting",
    desc:"Apply <strong>Conditional Formatting</strong> on the Average column: top 3 values highlighted in <strong>Gold/Yellow</strong>, bottom 3 in <strong>Orange</strong>. (Home → Conditional Formatting → Top/Bottom Rules)" },
  { id:"E20", marks:2, topic:"Text Functions",
    desc:"Add a column titled <em>'Upper Name'</em>. Use the <strong>UPPER function</strong> to display each student's name in ALL CAPS. E.g. <code>=UPPER(A2)</code>" },
  { id:"E21", marks:2, topic:"ROUND Function",
    desc:"Add a column titled <em>'Rounded Avg'</em>. Use the <strong>ROUND function</strong> to round each student's average to the nearest whole number. E.g. <code>=ROUND(G2, 0)</code>" },
  { id:"E22", marks:2, topic:"AutoFill",
    desc:"In a new column, use <strong>AutoFill</strong> to create a sequence: Student 1, Student 2, … Student 8 automatically. Then in another row, fill the months January through August." },
  { id:"E23", marks:3, topic:"Pie Chart",
    desc:"Create a <strong>Pie Chart</strong> showing the percentage share of each student's Total out of the class grand total. Add a chart title: <em>'Total Marks Distribution'</em>." },
  { id:"E24", marks:2, topic:"Remove Duplicates",
    desc:"On a new sheet, paste the student names column. Manually add 3 duplicate names. Then use <strong>Remove Duplicates</strong> (Data tab) to clean the list." },
  { id:"E25", marks:2, topic:"Text to Columns",
    desc:"On a new sheet, create a column with full names like 'Ali Ahmed'. Use <strong>Text to Columns</strong> (Data tab → Text to Columns → Delimited → Space) to split into First Name and Last Name." },
  { id:"E26", marks:2, topic:"TODAY Function",
    desc:"Add a cell labeled <em>'Report Date'</em> and use the <strong>TODAY()</strong> function to display today's date. Format the cell with a date format showing day/month/year." },
  { id:"E27", marks:2, topic:"CONCAT Function",
    desc:"Add a column titled <em>'Full ID'</em>. Use <strong>CONCAT</strong> to combine the student's name and their total marks with a dash, e.g. 'Ali-325'. E.g. <code>=CONCAT(A2,\"-\",F2)</code>" },
  { id:"E28", marks:2, topic:"Line Chart",
    desc:"Create a <strong>Line Chart</strong> showing how marks vary across Math, English, Science, and IT for at least 3 students. Add a descriptive title." },
  { id:"E29", marks:2, topic:"Cell Formatting",
    desc:"Apply <strong>alternating row colors</strong> to the data table: odd rows light blue, even rows white. Use Fill Color from the Home tab." },
  { id:"E30", marks:3, topic:"IF + AND Combined",
    desc:"Add a column titled <em>'Merit Award'</em>. Use <strong>IF with AND</strong>: if a student's Total > 320 AND their IT marks > 85, display 'Merit Scholar'; otherwise display 'Standard'. E.g. <code>=IF(AND(F2>320, E2>85), \"Merit Scholar\", \"Standard\")</code>" },
  { id:"E31", marks:2, topic:"Percentage Format",
    desc:"Add a column titled <em>'% of Total'</em>. Calculate each student's total as a percentage of 400 (max possible marks). Format the column as <strong>Percentage</strong> with 1 decimal place." },
  { id:"E32", marks:2, topic:"Spell Check",
    desc:"Run <strong>Spell Check</strong> (F7 or Review tab → Spelling) on the entire Sheet 1 and correct any errors found in student names or labels." },
  { id:"E33", marks:2, topic:"Freeze Columns",
    desc:"Freeze <strong>Column A</strong> (Student Name) so it stays visible when scrolling right through all subject columns. (View tab → Freeze Panes → Freeze First Column)" },
  { id:"E34", marks:2, topic:"Data Validation Range",
    desc:"Add <strong>Data Validation</strong> on each subject marks column (B to E) to only allow numbers between 0 and 100. Show an error alert if the user types outside this range." },
  { id:"E35", marks:3, topic:"Advanced IF",
    desc:"Add a column titled <em>'Performance'</em>. Use a nested IF: Average ≥ 85 → 'Outstanding', Average ≥ 70 → 'Good', Average ≥ 55 → 'Average', else → 'Needs Improvement'." },

  // ── NEW TASKS from Classes 11–17 ──
  { id:"E36", marks:3, topic:"VLOOKUP",
    desc:"On <strong>Sheet 2</strong>, create a lookup table with columns: <em>Student ID | Name | Grade</em> (10 rows). On Sheet 1, use <strong>=VLOOKUP()</strong> to pull the student's Name and Grade from Sheet 2 using their ID. Use <code>FALSE</code> for exact match. E.g. <code>=VLOOKUP(A2, Sheet2!A:C, 2, FALSE)</code>" },

  { id:"E37", marks:3, topic:"HLOOKUP",
    desc:"Create a horizontal data table with <strong>months as column headers</strong> (Jan–Jun) and rows: Sales, Profit. Use <strong>=HLOOKUP()</strong> to retrieve Sales for 'Mar' and Profit for 'May'. E.g. <code>=HLOOKUP(\"Mar\", A1:G3, 2, FALSE)</code>" },

  { id:"E38", marks:3, topic:"INDEX & MATCH",
    desc:"Build a student table (Name, City, Score — 10 rows). Use <strong>=INDEX(C2:C11, MATCH(\"Ali\", A2:A11, 0))</strong> to find Ali's score. Then replace your existing VLOOKUP with INDEX+MATCH and note the difference in a cell comment." },

  { id:"E39", marks:2, topic:"COUNTIF / SUMIF / AVERAGEIF",
    desc:"Using the student marks sheet: (1) Use <strong>=COUNTIF()</strong> to count how many students scored above 75. (2) Use <strong>=SUMIF()</strong> to total marks for one specific subject. (3) Use <strong>=AVERAGEIF()</strong> to find the class average for Math only." },

  { id:"E40", marks:2, topic:"Nested IF / IFS",
    desc:"Add a <em>'Letter Grade'</em> column. Use the <strong>=IFS()</strong> function: Average ≥ 90 → 'A+', Average ≥ 80 → 'A', Average ≥ 70 → 'B+', Average ≥ 60 → 'B', TRUE → 'C'. This replaces the nested IF with cleaner syntax." },

  { id:"E41", marks:3, topic:"Budget Tracker",
    desc:"Create a <strong>Budget Tracker</strong> on a new sheet with columns: <em>Date | Description | Income | Expense | Balance</em>. Add at least 10 entries. Use <code>=C2-D2</code> for Balance, <code>=SUM(C2:C100)</code> for Total Income, and <code>=IF(D2>C2,\"Over!\",\"\")</code> to flag overspending. Apply <strong>Conditional Formatting</strong> to highlight expenses over 500 in red." },

  { id:"E42", marks:2, topic:"Student Report Card",
    desc:"Create a <strong>Student Report Card</strong> with 5 students, 5 subjects (Urdu, English, Math, Science, Islamiat). Use <code>=SUM(B2:F2)</code> for Total, <code>=AVERAGE(B2:F2)</code> for Average, and a nested IF for Grade: ≥90→A+, ≥80→A, ≥70→B+, ≥60→B, else→C." },

  { id:"E43", marks:2, topic:"VLOOKUP + IF Combined",
    desc:"Combine <strong>VLOOKUP with IF</strong>: use VLOOKUP to retrieve a student's total marks from Sheet 2, then wrap it in IF to display 'Pass' if marks ≥ 150 or 'Fail' otherwise. E.g. <code>=IF(VLOOKUP(A2,Sheet2!A:C,3,FALSE)>=150,\"Pass\",\"Fail\")</code>" },

  { id:"E44", marks:3, topic:"Dependent Dropdown",
    desc:"Create a <strong>Dependent Dropdown</strong> using Data Validation: first dropdown for Subject (Math/Science/English), second dropdown shows relevant topics for that subject. Name the ranges after each subject and use <code>=INDIRECT(A1)</code> in the second dropdown's source. (Data tab → Data Validation)" },

  { id:"E45", marks:2, topic:"Advanced Data Validation",
    desc:"Apply <strong>Custom Data Validation</strong> with a formula to allow only ages between 10 and 25 in a registration form column. Use <code>=AND(A1>=10, A1<=25)</code> as the custom rule. Set a <strong>Stop</strong> error alert with a custom message." },
];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuestion(q) {
  const correctText = q.opts[q.ans];
  const shuffled = shuffleArray(q.opts);
  return {
    ...q,
    opts: shuffled,
    ans: shuffled.indexOf(correctText)
  };
}

function buildExamQuestions(hwCount, wordCount, excelCount, softwareCount) {
  const hw       = shuffleArray(QUESTION_BANK.filter(q => q.section === "Hardware")).slice(0, hwCount);
  const word     = shuffleArray(QUESTION_BANK.filter(q => q.section === "MS Word")).slice(0, wordCount);
  const excel    = shuffleArray(QUESTION_BANK.filter(q => q.section === "MS Excel")).slice(0, excelCount);
  const software = shuffleArray(QUESTION_BANK.filter(q => q.section === "Software")).slice(0, softwareCount || 0);
  return [...hw, ...word, ...excel, ...software].map(prepareQuestion);
}

// ═══════════════════════════════════════════════════════
//  POWERPOINT TASK BANK
// ═══════════════════════════════════════════════════════
const PPT_TASK_BANK = [
  { id:"P01", marks:1, topic:"Title Slide",
    desc:"Create a <strong>Title Slide</strong> as Slide 1: add the presentation title <em>'Computer Hardware — A Visual Guide'</em> and your name as the subtitle. Apply a professional <strong>Theme</strong> from the Design tab." },
  { id:"P02", marks:2, topic:"Slide Layout",
    desc:"Use at least <strong>3 different Slide Layouts</strong> in your presentation (e.g., Title and Content, Two Content, Blank). Right-click a slide → Layout to change it." },
  { id:"P03", marks:2, topic:"Text Formatting",
    desc:"On each content slide, format the <strong>slide title</strong> using a font size of at least 32pt and apply <strong>Bold</strong>. Use a consistent font throughout (e.g., Calibri or Arial)." },
  { id:"P04", marks:2, topic:"Bullet Points",
    desc:"Add <strong>bullet point lists</strong> on at least 3 slides with a minimum of 4 bullets each. Adjust <strong>indent levels</strong> — use Tab to indent sub-bullets (at least 2 slides with sub-bullets)." },
  { id:"P05", marks:3, topic:"Images",
    desc:"Insert at least <strong>2 images</strong> into different slides (Insert → Pictures). Resize and position them neatly. Add an <strong>Alt Text</strong> to each image (right-click image → Edit Alt Text)." },
  { id:"P06", marks:2, topic:"Slide Transitions",
    desc:"Apply <strong>Slide Transitions</strong> to all slides. Use at least 2 different transition types (e.g., Fade, Push, Wipe). Set the transition duration to 0.75 seconds. (Transitions tab)" },
  { id:"P07", marks:3, topic:"Animations",
    desc:"Apply <strong>Animations</strong> to text or objects on at least 3 slides. Use Entrance animations (e.g., Appear, Fly In). Set different delays or durations per element. (Animations tab)" },
  { id:"P08", marks:2, topic:"SmartArt",
    desc:"Insert a <strong>SmartArt graphic</strong> on one slide to represent a concept (e.g., a process or hierarchy for computer hardware). (Insert → SmartArt). Customize its colors." },
  { id:"P09", marks:2, topic:"Table",
    desc:"Insert a <strong>Table</strong> on one slide comparing at least 3 hardware components (columns: Component, Function, Example). (Insert → Table). Style the table using Table Design options." },
  { id:"P10", marks:3, topic:"Chart",
    desc:"Insert a <strong>Bar or Column Chart</strong> on one slide showing a comparison (e.g., storage capacity: HDD vs SSD vs RAM vs Flash Drive). Add a chart title. (Insert → Chart)" },
  { id:"P11", marks:1, topic:"Slide Numbers",
    desc:"Add <strong>Slide Numbers</strong> to all slides. (Insert → Header & Footer → check Slide Number → Apply to All). Ensure the title slide does NOT show a number." },
  { id:"P12", marks:2, topic:"Header & Footer",
    desc:"Add a <strong>Footer</strong> to all slides showing your name and the date. (Insert → Header & Footer → check Footer and Date and Time → Apply to All)" },
  { id:"P13", marks:2, topic:"Hyperlink",
    desc:"Add a <strong>Hyperlink</strong> on one slide — link a word or image to a related website (e.g., link 'Intel' to https://www.intel.com). (Select text → Insert → Link)" },
  { id:"P14", marks:2, topic:"Shapes & Drawing",
    desc:"Insert at least <strong>2 Shapes</strong> across your slides (e.g., an arrow, rectangle, or callout). Add text inside one shape. Apply a fill color and outline. (Insert → Shapes)" },
  { id:"P15", marks:1, topic:"Slide Sorter View",
    desc:"<strong>Rearrange your slides</strong> using Slide Sorter View (View → Slide Sorter). Ensure slides are in logical order: Title → Topics → Summary/Conclusion." },
  { id:"P16", marks:2, topic:"Presenter Notes",
    desc:"Add <strong>Speaker Notes</strong> to at least 4 slides (at least 2 sentences each). Notes should summarize the slide content. (Click in the Notes pane below the slide)" },
  { id:"P17", marks:2, topic:"Background",
    desc:"Customize the <strong>slide background</strong> on at least 2 slides. Use Format Background (Right-click slide → Format Background) to apply a gradient or solid color different from the theme." },
  { id:"P18", marks:3, topic:"Master Slide",
    desc:"Edit the <strong>Slide Master</strong> (View → Slide Master) to add a consistent logo placeholder or decorative shape that appears on all content slides. Close Master view after editing." },
  { id:"P19", marks:1, topic:"Spell Check",
    desc:"Run <strong>Spell Check</strong> on the entire presentation (F7 or Review → Spelling). Correct all errors found. Ensure all slide titles and bullet points are grammatically correct." },
  { id:"P20", marks:2, topic:"Rehearse Timings",
    desc:"Use <strong>Rehearse Timings</strong> (Slide Show → Rehearse Timings) and set each slide to display for at least 5 seconds. Save the timings when prompted." },
];

// ═══════════════════════════════════════════════════════
//  WORD DOCUMENT TOPICS (6 rotating topics)
// ═══════════════════════════════════════════════════════
const WORD_TOPICS = [
  {
    title: "The Internet & World Wide Web",
    subtitle: "A Comprehensive Guide",
    instructions: "Write a detailed document covering: <strong>History of the Internet</strong>, <strong>How the WWW Works</strong> (DNS, HTTP, URLs), <strong>Types of Networks</strong> (LAN, WAN, MAN), <strong>Web Browsers & Search Engines</strong>, and <strong>Internet Safety & Cybersecurity Tips</strong>. Write at least 2 paragraphs per topic.",
    saveAs: "Word_Internet_[YourName].docx"
  },
  {
    title: "Artificial Intelligence — Past, Present & Future",
    subtitle: "An Overview for Students",
    instructions: "Cover at least 5 topics: <strong>What is AI?</strong>, <strong>History of AI</strong>, <strong>Machine Learning vs Deep Learning</strong>, <strong>AI Applications</strong> (healthcare, education, self-driving cars), and <strong>Risks & Ethics of AI</strong>. Write at least 2 paragraphs per topic.",
    saveAs: "Word_AI_[YourName].docx"
  },
  {
    title: "Cybersecurity — Staying Safe Online",
    subtitle: "A Student's Digital Safety Guide",
    instructions: "Write about: <strong>Types of Cyber Threats</strong> (phishing, malware, ransomware), <strong>How Hackers Work</strong>, <strong>Password Best Practices</strong>, <strong>Two-Factor Authentication</strong>, and <strong>Safe Browsing Habits</strong>. Write at least 2 paragraphs per topic.",
    saveAs: "Word_Cybersecurity_[YourName].docx"
  },
  {
    title: "Cloud Computing — The Future of Storage",
    subtitle: "Understanding the Cloud",
    instructions: "Cover: <strong>What is Cloud Computing?</strong>, <strong>Public vs Private vs Hybrid Cloud</strong>, <strong>Cloud Service Models</strong> (IaaS, PaaS, SaaS), <strong>Popular Cloud Providers</strong> (Google, AWS, Azure), and <strong>Advantages & Disadvantages</strong>. Write at least 2 paragraphs per topic.",
    saveAs: "Word_Cloud_[YourName].docx"
  },
  {
    title: "Programming Languages — A Beginner's Guide",
    subtitle: "From Binary to Python",
    instructions: "Explain: <strong>What is Programming?</strong>, <strong>Low-Level vs High-Level Languages</strong>, <strong>Compilers vs Interpreters</strong>, <strong>Overview of Python, Java, C++, JavaScript</strong>, and <strong>Careers in Programming</strong>. Write at least 2 paragraphs per topic.",
    saveAs: "Word_Programming_[YourName].docx"
  },
  {
    title: "Input & Output Devices — A Complete Guide",
    subtitle: "Hardware We Use Every Day",
    instructions: "Write about: <strong>What are Input Devices?</strong> (keyboard, mouse, scanner, microphone), <strong>What are Output Devices?</strong> (monitor, printer, speaker, projector), <strong>Dual-Purpose Devices</strong> (touchscreen, headset), <strong>How Printers Work</strong>, and <strong>Future I/O Technologies</strong>. Write at least 2 paragraphs per topic.",
    saveAs: "Word_IO_Devices_[YourName].docx"
  }
];

// ═══════════════════════════════════════════════════════
//  EXCEL DATASETS (6 rotating datasets)
// ═══════════════════════════════════════════════════════
const EXCEL_DATASETS = [
  {
    title: "School Monthly Budget Tracker",
    description: "Enter this monthly school budget data and complete all tasks below.",
    saveAs: "Excel_Budget_[YourName].xlsx",
    headers: ["Month","Category","Budgeted (PKR)","Actual (PKR)","Difference","Status"],
    rows: [
      ["January","Stationery","5000","4800","(formula)","(formula)"],
      ["January","Electricity","12000","13500","(formula)","(formula)"],
      ["February","Stationery","5000","4200","(formula)","(formula)"],
      ["February","Internet","3000","3000","(formula)","(formula)"],
      ["March","Electricity","12000","11000","(formula)","(formula)"],
      ["March","Maintenance","8000","9500","(formula)","(formula)"],
      ["April","Stationery","5000","5600","(formula)","(formula)"],
      ["April","Salaries","80000","80000","(formula)","(formula)"],
      ["May","Internet","3000","3200","(formula)","(formula)"],
      ["May","Maintenance","8000","7500","(formula)","(formula)"]
    ],
    note: "<strong>Difference</strong> = Budgeted − Actual &nbsp;·&nbsp; <strong>Status</strong>: 'Over Budget' if Actual > Budgeted, else 'On Track'"
  },
  {
    title: "Employee Attendance & Salary Register",
    description: "Enter this HR data and complete all tasks below.",
    saveAs: "Excel_HR_[YourName].xlsx",
    headers: ["Employee Name","Department","Days Present","Daily Rate (PKR)","Gross Salary","Tax (10%)","Net Salary"],
    rows: [
      ["Ahmed Raza","IT","25","2000","(formula)","(formula)","(formula)"],
      ["Sana Malik","HR","22","1800","(formula)","(formula)","(formula)"],
      ["Bilal Qureshi","Finance","26","2200","(formula)","(formula)","(formula)"],
      ["Nadia Khan","IT","20","2000","(formula)","(formula)","(formula)"],
      ["Tariq Hussain","Admin","24","1500","(formula)","(formula)","(formula)"],
      ["Ayesha Noor","Finance","27","2200","(formula)","(formula)","(formula)"],
      ["Kamran Ali","HR","18","1800","(formula)","(formula)","(formula)"],
      ["Fatima Zahra","IT","25","2000","(formula)","(formula)","(formula)"]
    ],
    note: "<strong>Gross</strong> = Days × Rate &nbsp;·&nbsp; <strong>Tax</strong> = Gross × 10% &nbsp;·&nbsp; <strong>Net</strong> = Gross − Tax"
  },
  {
    title: "Fruit & Vegetable Sales Register",
    description: "Enter this shop sales data and complete all tasks below.",
    saveAs: "Excel_Sales_[YourName].xlsx",
    headers: ["Item","Category","Qty Sold (kg)","Price/kg (PKR)","Revenue","Discount (5%)","Net Revenue"],
    rows: [
      ["Apple","Fruit","120","180","(formula)","(formula)","(formula)"],
      ["Mango","Fruit","250","120","(formula)","(formula)","(formula)"],
      ["Potato","Vegetable","400","60","(formula)","(formula)","(formula)"],
      ["Tomato","Vegetable","180","90","(formula)","(formula)","(formula)"],
      ["Banana","Fruit","300","40","(formula)","(formula)","(formula)"],
      ["Onion","Vegetable","220","70","(formula)","(formula)","(formula)"],
      ["Guava","Fruit","150","100","(formula)","(formula)","(formula)"],
      ["Carrot","Vegetable","130","80","(formula)","(formula)","(formula)"]
    ],
    note: "<strong>Revenue</strong> = Qty × Price &nbsp;·&nbsp; <strong>Discount</strong> = Revenue × 5% &nbsp;·&nbsp; <strong>Net Revenue</strong> = Revenue − Discount"
  },
  {
    title: "Class Examination Results — Science Group",
    description: "Enter this exam results data and complete all tasks below.",
    saveAs: "Excel_Results_[YourName].xlsx",
    headers: ["Student Name","Physics","Chemistry","Biology","Math","Total","Average","Grade"],
    rows: [
      ["Zaid Hamza","82","76","88","91","(formula)","(formula)","(formula)"],
      ["Maira Aslam","90","85","92","78","(formula)","(formula)","(formula)"],
      ["Hamza Tariq","65","70","60","72","(formula)","(formula)","(formula)"],
      ["Layla Shah","78","82","79","85","(formula)","(formula)","(formula)"],
      ["Danyal Ahmed","55","60","58","50","(formula)","(formula)","(formula)"],
      ["Sadia Riaz","93","88","96","94","(formula)","(formula)","(formula)"],
      ["Irfan Malik","71","68","74","77","(formula)","(formula)","(formula)"],
      ["Aiman Baig","84","90","87","83","(formula)","(formula)","(formula)"]
    ],
    note: "<strong>Total</strong> = SUM &nbsp;·&nbsp; <strong>Average</strong> = AVERAGE &nbsp;·&nbsp; <strong>Grade</strong>: ≥85→A, ≥70→B, ≥55→C, else→F"
  },
  {
    title: "Library Book Inventory & Fine Tracker",
    description: "Enter this library data and complete all tasks below.",
    saveAs: "Excel_Library_[YourName].xlsx",
    headers: ["Book Title","Author","Borrower","Issue Date","Return Date","Days Overdue","Fine (PKR)"],
    rows: [
      ["Python Basics","Mark Lutz","Ali Ahmed","01-Apr","10-Apr","5","(formula)"],
      ["History of AI","Stuart Russell","Sara Khan","05-Apr","12-Apr","0","(formula)"],
      ["Excel Mastery","John Walkenbach","Bilal Raza","02-Apr","15-Apr","8","(formula)"],
      ["Network Guide","Andrew Tanenbaum","Hira Malik","08-Apr","14-Apr","2","(formula)"],
      ["Data Science 101","Wes McKinney","Usman Tariq","03-Apr","20-Apr","12","(formula)"],
      ["Cloud Computing","Thomas Erl","Zara Noor","07-Apr","13-Apr","0","(formula)"],
      ["Cybersecurity","William Stallings","Kamran Baig","04-Apr","18-Apr","7","(formula)"],
      ["Web Dev Crash","Jon Duckett","Ayesha Siddiqi","06-Apr","16-Apr","3","(formula)"]
    ],
    note: "<strong>Fine</strong> = Days Overdue × 10 PKR per day &nbsp;·&nbsp; If Days Overdue = 0, Fine = 0"
  },
  {
    title: "Online Store — Product Inventory Report",
    description: "Enter this inventory data and complete all tasks below.",
    saveAs: "Excel_Inventory_[YourName].xlsx",
    headers: ["Product","Category","Stock (Units)","Cost Price (PKR)","Sale Price (PKR)","Profit/Unit","Total Profit"],
    rows: [
      ["Laptop","Electronics","15","85000","110000","(formula)","(formula)"],
      ["Mouse","Accessories","80","800","1500","(formula)","(formula)"],
      ["USB Drive 64GB","Storage","150","600","1200","(formula)","(formula)"],
      ["HDMI Cable","Accessories","60","400","900","(formula)","(formula)"],
      ["Webcam HD","Electronics","30","5000","9500","(formula)","(formula)"],
      ["Keyboard","Accessories","45","1200","2500","(formula)","(formula)"],
      ["SSD 512GB","Storage","25","12000","18000","(formula)","(formula)"],
      ["Headphones","Electronics","35","3500","6500","(formula)","(formula)"]
    ],
    note: "<strong>Profit/Unit</strong> = Sale − Cost &nbsp;·&nbsp; <strong>Total Profit</strong> = Profit/Unit × Stock"
  }
];

// ═══════════════════════════════════════════════════════
//  MARK-BASED TASK SELECTOR (knapsack / greedy approach)
// ═══════════════════════════════════════════════════════
/**
 * Selects tasks from a bank such that their total marks equal targetMarks.
 * Uses a greedy + backtracking approach.
 * Falls back to closest possible total if exact match impossible.
 */
function selectTasksByMarks(bank, targetMarks) {
  if (!targetMarks || targetMarks <= 0) return [];
  const shuffled = shuffleArray([...bank]);

  // Try exact subset sum (greedy first pass)
  function greedyExact(items, target) {
    const result = [];
    let remaining = target;
    // try descending then ascending to fill gaps
    const desc = [...items].sort((a,b) => b.marks - a.marks);
    for (const item of desc) {
      if (item.marks <= remaining) {
        result.push(item);
        remaining -= item.marks;
        if (remaining === 0) return result;
      }
    }
    // try filling remaining gap with smallest available
    const asc = [...items].filter(i => !result.includes(i)).sort((a,b) => a.marks - b.marks);
    for (const item of asc) {
      if (item.marks <= remaining) {
        result.push(item);
        remaining -= item.marks;
        if (remaining === 0) return result;
      }
    }
    return result; // best effort
  }

  const selected = greedyExact(shuffled, targetMarks);
  selected.forEach((t, i) => t.num = i + 1);
  return selected;
}

function buildPracticalTasks(wordTargetMarks, excelTargetMarks, pptTargetMarks) {
  // Support both old (count) and new (marks) modes
  // If value > 20 it's treated as marks, otherwise as count (backward compat)
  let wordTasks, excelTasks, pptTasks;

  if (wordTargetMarks > 20) {
    wordTasks  = selectTasksByMarks(WORD_TASK_BANK,  wordTargetMarks);
  } else {
    wordTasks  = shuffleArray(WORD_TASK_BANK).slice(0, wordTargetMarks);
    wordTasks.forEach((t,i) => t.num = i+1);
  }

  if (excelTargetMarks > 20) {
    excelTasks = selectTasksByMarks(EXCEL_TASK_BANK, excelTargetMarks);
  } else {
    excelTasks = shuffleArray(EXCEL_TASK_BANK).slice(0, excelTargetMarks);
    excelTasks.forEach((t,i) => t.num = i+1);
  }

  if (pptTargetMarks > 15) {
    pptTasks   = selectTasksByMarks(PPT_TASK_BANK,   pptTargetMarks);
  } else {
    pptTasks   = shuffleArray(PPT_TASK_BANK).slice(0, pptTargetMarks||8);
    pptTasks.forEach((t,i) => t.num = i+1);
  }

  // Pick random topic & dataset for this session
  const wordTopic   = WORD_TOPICS[Math.floor(Math.random() * WORD_TOPICS.length)];
  const excelDataset= EXCEL_DATASETS[Math.floor(Math.random() * EXCEL_DATASETS.length)];

  return { wordTasks, excelTasks, pptTasks, wordTopic, excelDataset };
}

const DEFAULT_EXAM_CONFIG = {
  hwQuestions:    20,
  wordQuestions:   5,
  excelQuestions:  5,
  wordTasks:      12,
  excelTasks:     12,
  pptTasks:        8,
  timeMinutes:    45
};

window.PPT_TASK_BANK   = PPT_TASK_BANK;
window.WORD_TOPICS     = WORD_TOPICS;
window.EXCEL_DATASETS  = EXCEL_DATASETS;

(function cacheBanksForTeacher(){
  try{
    localStorage.setItem('exam_question_bank_cache', JSON.stringify(
      QUESTION_BANK.map(function(q){
        return {id:q.id, section:q.section, topic:q.topic, q:q.q, opts:q.opts, ans:q.ans, diff:q.diff};
      })
    ));
    localStorage.setItem('exam_word_task_bank_cache', JSON.stringify(
      WORD_TASK_BANK.map(function(t){
        return {id:t.id, topic:t.topic, marks:t.marks, desc:t.desc};
      })
    ));
    localStorage.setItem('exam_excel_task_bank_cache', JSON.stringify(
      EXCEL_TASK_BANK.map(function(t){
        return {id:t.id, topic:t.topic, marks:t.marks, desc:t.desc};
      })
    ));
    localStorage.setItem('exam_ppt_task_bank_cache', JSON.stringify(
      PPT_TASK_BANK.map(function(t){
        return {id:t.id, topic:t.topic, marks:t.marks, desc:t.desc};
      })
    ));
    // Stats for teacher panel
    const bySection = {};
    QUESTION_BANK.forEach(function(q){
      bySection[q.section] = (bySection[q.section]||0)+1;
    });
    localStorage.setItem('exam_bank_stats', JSON.stringify({
      totalQuestions: QUESTION_BANK.length,
      totalWordTasks: WORD_TASK_BANK.length,
      totalExcelTasks: EXCEL_TASK_BANK.length,
      totalPptTasks: PPT_TASK_BANK.length,
      bySection: bySection
    }));
  }catch(e){}
})();
