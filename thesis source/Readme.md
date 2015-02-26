#My very own LaTex cheat sheet 
The main file is **thesis.tex**, which contains styles and loads **thesis-subdocuments** which loads the different part subfiles. Each part subfile and also some chapter files can be compiled to pdf.  
_This simplifies working on the thesis._  

##Compile subfiles to their own pdf files
This needs to be added to every subfile  
```
\documentclass[../../../thesis.tex]{subfiles}
%set currfolder to allow main file to compile and also this file to compile (\def does not work due to expansion issues)
\ifcurrfiledir{}{\edef\currfolder{.}}{\edef\currfolder{\currfiledir}}
\begin{document}

%file contents, may also include another subfile

\end{document}
```
I use the ```currfolder``` variable to reference either to the current folder or the passed folder seen from the main file.  
Then I am able to include any files that I need from the folders that I want.  


##Latex commands

###How to insert a picture
Information about figures is found in [the wikibook](http://en.wikibooks.org/wiki/LaTeX/Floats,_Figures_and_Captions)

```
\img[short caption for lof]{nat}{long figure caption}
```
will create a figure like this:
```
%place figure roughly at position in source code
\begin{figure}[h]
	\centering
	\includegraphics{\currfolder/res/nat}
	\caption[short caption for lof]{long figure caption}
	%\label{fig:nat}
\end{figure}
```
_Info:_ [nat] is an optional comment and needs not be specified

**Code for this command:**
```
\usepackage{xparse}
%this allows to insert an image like this:
%\img[short caption for tableoffigures]{filename in \currfolder/res/}{caption}
%or
%\img{filename in \currfolder/res/}{caption}
\DeclareDocumentCommand \img { o m m } {%
	\begin{figure}[h]
		\centering
		\includegraphics{\currfolder/res/{#2}}
		\IfNoValueTF{#1}%
			{\caption{#3}}%
			{\caption[#1]{#3}}%
  	\end{figure}
}
```

####Insert image with a given height
```
\imgWithHeight[short caption for lof]{image path}{long figure caption}{height}  
```  
_Info:_ height might e.g. be '4cm'

####Insert image with a second line containing the source
```
\imgWithSource{image path}{figure caption}{source}  
```  
_Info:_ source will not be displayed in the table of contents


###Footnotes
Example:  
```
This is some text\footnote{that has a footnote}
```

If an url in a footnote contains a **#**, it needs to be escaped:  
```\footnote{a link \url{www.example.com#anchor}}``` does not work, but ```\footnote{a link \url{www.example.com\#anchor}}``` does.  